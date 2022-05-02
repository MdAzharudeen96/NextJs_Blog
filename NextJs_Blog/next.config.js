const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'MdAzhar',
        mongodb_password: '0JGfPI2Xa2q6wHu1',
        mongodb_clustername: 'nextblog',
        mongodb_database: 'newsletter',
      },
    };
  }
};
