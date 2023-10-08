const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"]
    },
    projects: [
      {
        type: Schema.Types.ObjectId
      }
    ],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual("projectCount").get(function () {
  return this.projects.length;
});

const User = model("User", userSchema);

module.exports = User;
