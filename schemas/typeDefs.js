const typeDefs = `
  type User {
    _id: ID
    name: String
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
