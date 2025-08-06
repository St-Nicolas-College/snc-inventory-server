'use strict';

/**
 * acquisition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::acquisition.acquisition');
