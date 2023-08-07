/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import fs from 'fs-extra';
import { glob } from 'glob';
import { extract } from '@formatjs/cli-lib';

const locales = ['en', 'ru'];

const GLOB_PATTERN = 'src/**/*.{js,jsx,ts,tsx}';
const fileToMessages: any = {};
let messages: any = {};

const posixPath = (fileName: string): string => fileName.replace(/\\/g, '/');

async function writeMessages(fileName: string, msgs: object) {
  await fs.writeFile(fileName, `${JSON.stringify(msgs, null, 2)}\n`);
}

// merge messages to source files
async function mergeToFile(locale: string, toBuild: boolean) {
  const fileName = `src/messages/${locale}.json`;
  const originalMessages: any = {};

  try {
    const oldFile = (await fs.readFile(fileName)).toString();

    let oldJson;
    try {
      oldJson = JSON.parse(oldFile);
    } catch (err: any) {
      throw new Error(`Error parsing messages JSON in file ${fileName}`);
    }

    oldJson.forEach((message: any) => {
      delete message.files;
      originalMessages[message.id] = message;
    });
  } catch (err: any) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  Object.keys(messages).forEach((id: string) => {
    const newMsg = messages[id];
    originalMessages[id] = originalMessages[id] || { id };
    const msg = originalMessages[id];
    msg.description = newMsg.description || msg.description;
    msg.defaultMessage = newMsg.defaultMessage || msg.defaultMessage;
    msg.message = msg.message || '';
    msg.files = newMsg.files;
  });

  const result = Object.keys(originalMessages)
    .map((key) => originalMessages[key])
    .filter((msg) => msg.files);

  await writeMessages(fileName, result);

  console.info(`Messages updated: ${fileName}`);

  if (toBuild && locale !== '_default') {
    const buildFileName = `build/messages/${locale}.json`;
    try {
      await writeMessages(buildFileName, result);
      console.info(`Build messages updated: ${buildFileName}`);
    } catch (err: any) {
      console.error(`Failed to update ${buildFileName}`);
    }
  }
}

// call everytime before updating file!
function mergeMessages() {
  messages = {};

  Object.keys(fileToMessages).forEach((fileName: string) => {
    Object.entries(fileToMessages[fileName]).forEach(([id, newMsg]: any) => {
      const message = messages[id] || {};
      messages[id] = {
        description: newMsg?.description || message.description,
        defaultMessage: newMsg?.defaultMessage || message.defaultMessage,
        message: newMsg?.message || message.message || '',
        files: message.files ? [...message.files, fileName].sort() : [fileName],
      };
    });
  });
}

async function updateMessages(toBuild: boolean) {
  mergeMessages();
  await Promise.all(
    locales.map((locale: string) => mergeToFile(locale, toBuild)),
  );
}

/**
 * Extract react-intl messages and write it to src/messages/_default.json
 * Also extends known localizations
 */
async function extractMessages() {
  const processFile = async (fileName: string) => {
    try {
      const code = await fs.readFile(fileName, 'utf8');
      // code = code.replace(/import .*;/g, '// replaced');
      // code = code.split('\n').map((line) => line.replace(/^import .*/, '')).join('\n');
      // console.log(fileName);
      // console.log(code);
      const posixName = posixPath(fileName);
      if (code.indexOf('defineMessages') === -1) {
        delete fileToMessages[posixName];
        return;
      }

      const result = await extract([fileName], { throws: true });
      const messages = JSON.parse(result);
      if (messages && Object.keys(messages).length) {
        fileToMessages[posixName] = messages;
      } else {
        delete fileToMessages[posixName];
      }
    } catch (err: any) {
      console.error(`extractMessages: In ${fileName}:\n`, err.codeFrame || err);
    }
  };

  const files = glob.sync(GLOB_PATTERN).filter((f) => !f.startsWith('src/apexLib'));

  console.time('transform');
  await Promise.all(files.map(processFile));
  console.timeEnd('transform');
  await updateMessages(false);
}

export default extractMessages;
