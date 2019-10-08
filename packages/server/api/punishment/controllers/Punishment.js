'use strict';

/**
 * Punishment.js controller
 *
 * @description: A set of functions called "actions" for managing `Punishment`.
 */

module.exports = {

  /**
   * Retrieve punishment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.punishment.search(ctx.query);
    } else {
      return strapi.services.punishment.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a punishment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.punishment.fetch(ctx.params);
  },

  /**
   * Count punishment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.punishment.count(ctx.query);
  },

  /**
   * Create a/an punishment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.punishment.add(ctx.request.body);
  },

  /**
   * Update a/an punishment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.punishment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an punishment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.punishment.remove(ctx.params);
  }
};
