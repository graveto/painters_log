const { User, Company, Range } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    companies: async () => {
      return await Company.find({});
    },
    ranges: async () => {
      return await Range.find({});
    }
  },
  Mutation: {
    addCompany: async (parent, { name }) => {
      return await Company.create({ name });
    },
    addRange: async (parent, { name }) => {
      return await Range.create({ name });
    }
  }
};

module.exports = resolvers;
