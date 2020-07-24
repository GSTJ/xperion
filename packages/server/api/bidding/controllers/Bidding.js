'use strict';

/**
 * Bidding.js controller
 *
 * @description: A set of functions called "actions" for managing `Bidding`.
 */

module.exports = {

  /**
   * Retrieve bidding records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.bidding.search(ctx.query);
    } else {
      return strapi.services.bidding.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a bidding record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bidding.fetch(ctx.params);
  },

  /**
   * Count bidding records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bidding.count(ctx.query);
  },

  /**
   * Create a/an bidding record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bidding.add(ctx.request.body);
  },

  /**
   * Update a/an bidding record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bidding.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bidding record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bidding.remove(ctx.params);
  }
};
