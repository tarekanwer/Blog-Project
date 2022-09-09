const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      webpack: (config, { isServer }) => {
        if (!isServer) {
          // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.node = {
            fs: "empty",
          };
        }

        return config;
      },
      env: {
        mongodb_username: "tarekanwer",
        mongodb_password: "etpBXzOb7NuOz2Au",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.node = {
          fs: "empty",
        };
      }

      return config;
    },
    env: {
      mongodb_username: "tarekanwer",
      mongodb_password: "etpBXzOb7NuOz2Au",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
