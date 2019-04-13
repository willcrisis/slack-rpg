'use strict';

/**
 * Parse a boolean from a string
 *
 * @param  {string} string A string to parse into a boolean
 * @return {mixed}         Either a boolean or the original value
 */
function parseBool(string) {
  if (typeof string === 'string') {
    return /^(true|1)$/i.test(string);
  }

  return string;
}

/**
 * Parses and enhances config object
 *
 * @param  {object} fileConfig the raw object from file
 * @return {object}            the paresed config object
 * @throws Error if it cannot parse object
 */
function parse(fileConfig) {
  if (typeof fileConfig !== 'object') {
    throw new Error('Config is not an object');
  }

  const config = fileConfig;

  /**
   * Pull config from ENV if set
   */
  config.app.addons = process.env.APP_ADDONS || fileConfig.app.addons;

  config.slack.token = process.env.SLACK_TOKEN || fileConfig.slack.token;
  config.slack.clientId = process.env.SLACK_CLIENT_ID || fileConfig.slack.clientId;
  config.slack.clientSecret = process.env.SLACK_CLIENT_SECRET || fileConfig.slack.clientSecret;
  config.slack.clientSigningSecret =
    process.env.SLACK_CLIENT_SIGNING_SECRET || fileConfig.slack.clientSigningSecret;
  config.slack.autoReconnect =
    parseBool(process.env.SLACK_AUTO_RECONNECT) || fileConfig.slack.autoReconnect;

  return config;
}

module.exports = {
  parse,
  parseBool,
};
