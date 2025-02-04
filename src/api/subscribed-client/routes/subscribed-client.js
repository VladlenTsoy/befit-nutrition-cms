'use strict';

/**
 * subscribed-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subscribed-client.subscribed-client');
