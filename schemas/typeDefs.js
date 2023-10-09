const typeDefs = `
  type User {
    _id: ID
    userName: String
  }

  type Range {
    _id: ID
    name: String
    paintType: String
  }

  type Company {
    _id: ID
    name: String
    ranges: [Range]
  }

  type Query {
    users: [User]
    companies: [Company]
    ranges: [Range]
  }

  type Mutation {
    addCompany(name: String!): Company
    addRange(name: String!): Range
  }
`;

module.exports = typeDefs;
