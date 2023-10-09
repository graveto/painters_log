const { Schema, model } = require("mongoose");

const paintSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    maker: {
      type: String,
      trim: true
    },
    type: {
      type: String,
      trim: true
    },
    bottleType: {
      type: String,
      trim: true
    },
    bottleSize: {
      type: Number
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

const Paint = model("Paint", paintSchema);

module.exports = Paint;
