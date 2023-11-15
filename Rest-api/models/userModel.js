const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [2, "Username should be at least 2 characters"],
      validate: {
        validator: function (v) {
          return /[a-zA-Z0-9]+/g.test(v);
        },
        message: (props) =>
          `${props.value} must contains only latin letters and digits!`,
      },
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, "Username should be at least 2 characters"],
      validate: {
        validator: function (v) {
          return /[a-zA-Z0-9]+/g.test(v);
        },
        message: (props) =>
          `${props.value} must contains only latin letters and digits!`,
      },
    },
    // tel: {
    //     type: String,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     minlength: [5, 'Username should be at least 5 characters'],
    //     validate: {
    //         validator: function (v) {
    //             return /[a-zA-Z0-9]+/g.test(v);
    //         },
    //         message: props => `${props.value} must contains only latin letters and digits!`
    //     },
    // },
    password: {
      type: String,
      required: true,
      minlength: [5, "Password should be at least 5 characters"],
      validate: {
        validator: function (v) {
          return /[a-zA-Z0-9]+/g.test(v);
        },
        message: (props) =>
          `${props.value} must contains only latin letters and digits!`,
      },
    },
    // themes: [{
    //     type: ObjectId,
    //     ref: "Theme"
    // }],
    // posts: [{
    //     type: ObjectId,
    //     ref: "Post"
    // }]
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.methods = {
  matchPassword: function (password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
