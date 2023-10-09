const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const Company = model("Company", companySchema);

module.exports = Company;
