'use strict';

const config = {
  app: {
    addons: 'slack-rpg/addon-official',
    include: {
      general: false,
    },
  },
  slack: {
    token: 'xoxb-Your-Token',
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
    clientSigningSecret: 'your-client-signing-secret',
    autoReconnect: true,
  },
};

module.exports = config;
