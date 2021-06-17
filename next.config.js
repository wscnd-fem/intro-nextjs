const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// const nextEnv = require("next-env");
// const dotenvLoad = require("dotenv-load");

module.exports = (phase, { defaultConfig }) => {
  //   console.log(defaultConfig);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in dev mode");
    return {
      /* development only config options here */
      ...defaultConfig,
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
