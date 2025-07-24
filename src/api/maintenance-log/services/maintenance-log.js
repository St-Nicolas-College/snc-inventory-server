'use strict';

/**
 * maintenance-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-log.maintenance-log');
