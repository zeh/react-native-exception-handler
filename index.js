const noop = () => {};

export const setJSExceptionHandler = (customHandler = noop, allowedInDevMode = false) => {
  const allowed = allowedInDevMode ? true : !__DEV__;
  if (allowed) {
    global.ErrorUtils.setGlobalHandler(customHandler);
  } else {
    console.log('Skipping setJSExceptionHandler: Reason: In DEV mode and allowedInDevMode = false');
  }
};

export default {
  setJSExceptionHandler
};
