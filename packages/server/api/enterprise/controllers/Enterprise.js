'use strict';

/**
 * Enterprise.js controller
 *
 * @description: A set of functions called "actions" for managing `Enterprise`.
 */

module.exports = {

  /**
   * Retrieve enterprise records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.enterprise.search(ctx.query);
    } else {
      return strapi.services.enterprise.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a enterprise record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.enterprise.fetch(ctx.params);
  },

  /**
   * Count enterprise records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.enterprise.count(ctx.query);
  },

  /**
   * Create a/an enterprise record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.enterprise.add(ctx.request.body);
  },

  /**
   * Update a/an enterprise record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.enterprise.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an enterprise record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.enterprise.remove(ctx.params);
  }
};
