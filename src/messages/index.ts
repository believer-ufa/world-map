/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import en from './en.json';
import ru from './ru.json';

const locales: any = { en, ru };
const messages: any = {};

Object.keys(locales).forEach((key: string) => {
  const data: any = locales?.[key];
  messages[key] = data.reduce((msgs: any, msg: any) => {
    msgs[msg.id] = msg.message;
    return msgs;
  }, {});
});

export default messages;
