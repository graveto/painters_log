const { Schema, model } = require("mongoose");

const projectSchema = {}

const Project = model("Range", projectSchema);

module.exports = Project;
