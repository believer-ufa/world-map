/* eslint-disable global-require */

type callbackFunc = (options?: object) => Promise<void> | undefined;

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

  const taskRunResult = task(options);

  if (taskRunResult) {
    return taskRunResult.then((resolution) => {
      const end = new Date();
      const time = end.getTime() - start.getTime();
      console.info(
        `[${format(end)}] Finished '${task.name}${options ? `(${JSON.stringify(options)})` : ''}' after ${time} ms`,
      );
      return resolution;
    });
  }
};

if (process.argv.length > 2) {
  const loadAndRunModule = async () => {
    const loadedModule = await import(process.argv[2]) as ({ default: callbackFunc } | callbackFunc);
    const runResult = run(loadedModule);
    if (runResult) {
      runResult.catch(printErrorAndExit);
    }
  };

  loadAndRunModule().catch(printErrorAndExit);
}

export default run;
