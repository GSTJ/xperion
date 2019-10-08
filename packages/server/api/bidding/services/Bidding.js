'use strict';

/* global Bidding */

/**
 * Bidding.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');
const { convertRestQueryParams, buildQuery } = require('strapi-utils');

module.exports = {

  /**
   * Promise to fetch all biddings.
   *
   * @return {Promise}
   */

  fetchAll: (params, populate) => {
    const filters = convertRestQueryParams(params);
    const populateOpt = populate || Bidding.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)

    return buildQuery({
      model: Bidding,
      filters,
      populate: populateOpt,
    });
  },

  /**
   * Promise to fetch a/an bidding.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Bidding.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Bidding
      .findOne(_.pick(params, _.keys(Bidding.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count biddings.
   *
   * @return {Promise}
   */

  count: (params) => {
    const filters = convertRestQueryParams(params);

    return buildQuery({
      model: Bidding,
      filters: { where: filters.where },
    })
      .count()
  },

  /**
   * Promise to add a/an bidding.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Bidding.associations.map(ast => ast.alias));
    const data = _.omit(values, Bidding.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Bidding.create(data);

    // Create relational data and return the entry.
    return Bidding.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an bidding.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Bidding.associations.map(a => a.alias));
    const data = _.omit(values, Bidding.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Bidding.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Bidding.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an bidding.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Bidding.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Bidding
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Bidding.associations.map(async association => {
        if (!association.via || !data._id || association.dominant) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an bidding.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('bidding', params);
    // Select field to populate.
    const populate = Bidding.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Bidding.attributes).reduce((acc, curr) => {
      switch (Bidding.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Bidding
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
