const { Schema, model } = require("mongoose");

const projectSchema = {}

const Project = model("Project", projectSchema);

module.exports = Project;
