'use strict';

/**
 * protein service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::protein.protein');
