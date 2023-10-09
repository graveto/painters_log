const fs = require("fs");
const gql = fs.readFileSync("./schemas/schema.gql", "utf8");
const typeDefs = `${gql}`;

module.exports = typeDefs;
