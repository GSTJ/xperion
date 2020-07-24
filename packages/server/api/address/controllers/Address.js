'use strict';

/**
 * Address.js controller
 *
 * @description: A set of functions called "actions" for managing `Address`.
 */

module.exports = {

  /**
   * Retrieve address records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.address.search(ctx.query);
    } else {
      return strapi.services.address.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a address record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.address.fetch(ctx.params);
  },

  /**
   * Count address records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.address.count(ctx.query);
  },

  /**
   * Create a/an address record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.address.add(ctx.request.body);
  },

  /**
   * Update a/an address record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.address.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an address record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.address.remove(ctx.params);
  }
};
