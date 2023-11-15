const { recipeModel } = require("../models");
const { newPost } = require("./postController");

function getThemes(req, res, next) {
  recipeModel
    .find()
    //.populate("userId")
    .then((themes) => res.json(themes))
    .catch(next);
}

function search(req, res, next) {
  const search = req.query.title || "";
  recipeModel
    //.find()
    .find({ recipeName: { $regex: search, $options: "i" } })
    //.populate("userId")
    .then((themes) => res.json(themes))
    .catch(next);
}

function getRecipe(req, res, next) {
  const { themeId } = req.params;
  //console.log(themeId);
  recipeModel
    .find({ _id: themeId })
    // .populate({
    //   path: "posts",
    //   populate: {
    //     path: "userId",
    //   },
    // })
    .then((theme) => res.json(theme))
    .catch(next);
}

function deleteRecipe(req, res, next) {
  const { themeId } = req.params;
  //console.log(themeId);
  recipeModel
    .findByIdAndDelete(themeId)
    .then((recipe) => res.status(200).json(recipe))
    .catch(next);
}

function updateRecipe(req, res, next) {
  const { themeId } = req.params;

  const {
    recipeName,
    imageUrl,
    ingredients,
    prepTime,
    cookTime,
    totalTime,
    servings,
  } = req.body;

  recipeModel
    .findByIdAndUpdate(themeId, {
      recipeName,
      imageUrl,
      ingredients,
      prepTime,
      cookTime,
      totalTime,
      servings,
    })
    .then((recipe) => res.status(200).json(recipe))
    .catch(next);
}

function createTheme(req, res, next) {
  const {
    recipeName,
    imageUrl,
    ingredients,
    prepTime,
    cookTime,
    totalTime,
    servings,
    //themeName,
    //postText
  } = req.body; //themeName, postText
  const { _id: userId } = req.user;

  recipeModel
    .create({
      //themeName,
      recipeName,
      imageUrl,
      ingredients,
      prepTime,
      cookTime,
      totalTime,
      servings,
      userId,
      subscribers: [userId],
    })
    // .then((theme) => {
    //   newPost(postText, userId, theme._id).then(([_, updatedTheme]) =>
    //   );
    // })
    .then((recipe) => res.status(200).json(recipe))
    .catch(next);
}

function subscribe(req, res, next) {
  const themeId = req.params.themeId;
  const { _id: userId } = req.user;
  recipeModel
    .findByIdAndUpdate(
      { _id: themeId },
      { $addToSet: { subscribers: userId } },
      { new: true }
    )
    .then((updatedTheme) => {
      res.status(200).json(updatedTheme);
    })
    .catch(next);
}

/*

async function create(game, creatorId) {
  //console.log(game, '--------', creatorId);

  const { name, imageUrl, price, description, genre, platform } = game;

  const newGame = await Game.create({
    name,
    imageUrl,
    price,
    description,
    genre,
    platform,
    creatorId,
  });
  console.log(newGame);
}

async function getAllGames() {
  return await Game.find({}).lean();
} 

async function details(id) {
  return await Game.findById(id);
  //populate('accessories');
}

async function getGame(id) {
  return await Game.findById(id).lean();
}

async function deleteGame(id) {
  return await Game.findByIdAndDelete(id);
}

async function updateGame(id, gameData) {
  return await Game.findByIdAndUpdate(id, gameData);
}

async function buyGame(gameId, ownewId) {
  const currnetGame = await Game.findById(gameId);
  currnetGame.boughtBy.push(ownewId);

  currnetGame.save();
}
*/

module.exports = {
  getThemes,
  createTheme,
  getRecipe,
  subscribe,
  updateRecipe,
  deleteRecipe,
  search,
};
