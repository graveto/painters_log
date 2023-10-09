const { Schema, model } = require("mongoose");

const rangeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

const Range = model("Range", rangeSchema);

module.exports = Range;
