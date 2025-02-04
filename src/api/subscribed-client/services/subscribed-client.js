'use strict';

/**
 * subscribed-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribed-client.subscribed-client');
