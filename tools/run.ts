/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

type callbackFunc = (options?: object) => Promise<void>;

const printErrorAndExit = (err: Error) => {
  console.error(err);
  process.exit(1);
};

const format = (time: Date): string => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
};

const run = (fn: { default: callbackFunc } | callbackFunc, options?: object) => {
  const task: callbackFunc = (typeof fn === 'function' ? fn : fn.default);
  const start = new Date();
  console.info(
    `[${format(start)}] Starting '${task.name}${options ? `(${JSON.stringify(options)})` : ''}'...`,
  );
  return task(options).then((resolution) => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.info(
      `[${format(end)}] Finished '${task.name}${options ? `(${JSON.stringify(options)})` : ''}' after ${time} ms`,
    );
    return resolution;
  });
};

if (process.argv.length > 2) {
  const loadAndRunModule = async () => {
    const loadedModule = await import(`./${process.argv[2]}.ts`) as ({ default: callbackFunc } | callbackFunc);
    console.log({ loadedModule });
    run(loadedModule).catch(printErrorAndExit);
  };

  loadAndRunModule().catch(printErrorAndExit);
}

export default run;
