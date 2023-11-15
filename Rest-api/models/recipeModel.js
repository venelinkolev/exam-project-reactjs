const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, "Recipe Name is required!"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required!"],
    },
    ingredients: {
      type: String,
      required: [true, "Ingredients is required!"],
      minlength: [15, "Ingredients must be at least 15 characters long."],
    },
    prepTime: {
      type: Number,
      required: [true, "Prep Time is required!"],
      min: [1, "The time should be more that 0 minute!"],
    },
    cookTime: {
      type: Number,
      required: [true, "Cook Time is required!"],
      min: [1, "The time should be more that 0 minute!"],
    },
    totalTime: {
      type: Number,
      required: [true, "Cook Time is required!"],
      min: [1, "The time should be more that 0 minute!"],
    },
    servings: {
      type: Number,
      required: [true, "Servings is required!"],
      min: [1, "The Servings should be more that 0!"],
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },

    // subscribers: [
    //   {
    //     type: ObjectId,
    //     ref: "User",
    //   },
    // ],
    // userId: {
    //   type: ObjectId,
    //   ref: "User",
    // },
    // posts: [
    //   {
    //     type: ObjectId,
    //     ref: "Post",
    //   },
    // ],
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Recipe", recipeSchema);
