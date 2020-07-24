'use strict';

/**
 * Complaint.js controller
 *
 * @description: A set of functions called "actions" for managing `Complaint`.
 */

module.exports = {

  /**
   * Retrieve complaint records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.complaint.search(ctx.query);
    } else {
      return strapi.services.complaint.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a complaint record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.complaint.fetch(ctx.params);
  },

  /**
   * Count complaint records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.complaint.count(ctx.query);
  },

  /**
   * Create a/an complaint record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.complaint.add(ctx.request.body);
  },

  /**
   * Update a/an complaint record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.complaint.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an complaint record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.complaint.remove(ctx.params);
  }
};
