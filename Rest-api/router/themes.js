const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { recipeController, postController } = require("../controllers");

// middleware that is specific to this router

router.get("/", recipeController.getThemes);

router.post("/new-recipe", auth(), recipeController.createTheme);

router.get("/:themeId/details", recipeController.getRecipe);
router.delete("/:themeId/delete", auth(), recipeController.deleteRecipe);
router.get("/:themeId/edit", recipeController.getRecipe);
router.post("/:themeId/edit", recipeController.updateRecipe);
router.post("/:themeId", auth(), postController.createPost);
router.put("/:themeId", auth(), recipeController.subscribe);
router.put("/:themeId/posts/:postId", auth(), postController.editPost);
router.delete("/:themeId/posts/:postId", auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), recipeController.getReservations);

/*
router.get('/:gameId/details', async (req, res) => {
  const gameId = req.params.gameId;
  const userId = req.user?.id;
  let game = null; 
  try {
    game = await getGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: extractErrorMessages(err),
    });
  }

  const isCreator = game.creatorId.toString() == req.user?.id;
  //console.log(isCreator, '-----', game.creatorId.toString(), '--', req.user?.id);

  function isBuyer(game, userId) {
    const findBuyer = game.boughtBy.find((id) => id == userId);
    //console.log(findBuyer);
    if (findBuyer) return false;
    else return true;
  }

  res.render('details', {
    title: `${game.name} Details`,
    game,
    isCreator,
    findBuyer: isBuyer(game, userId),
  });
});

router.get('/:gameId/edit', async (req, res) => {
  const options = ['-------', 'PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];

  const gameId = req.params.gameId;
  let game = null;
  try {
    game = await getGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: extractErrorMessages(err),
    });
  }

  function option(platform) {
    return options.map((x) => ({
      value: x,
      selected: platform == x ? 'selected' : '',
    }));
  }

  res.render('edit', {
    title: 'Edit Game',
    game,
    option: option(game.platform),
  });
});

router.post('/:gameId/edit', async (req, res) => {
  const gameId = req.params.gameId;
  const gameData = req.body;

  try {
    await updateGame(gameId, gameData);
  } catch (err) {
    return res.render('edit', {
      titel: 'Edit Game',
      error: extractErrorMessages(err),
    });
  }

  res.redirect(`/games/${gameId}/details`);
});

router.get('/:gameId/delete', async (req, res) => {
  const gameId = req.params.gameId;
  try {
    await deleteGame(gameId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: extractErrorMessages(err),
    });
  }

  res.redirect('/games/catalog');
});

router.get('/:gameId/buy', async (req, res) => {
  const gameId = req.params.gameId;
  const ownewId = req.user.id;

  try {
    await buyGame(gameId, ownewId);
  } catch (err) {
    return res.render('details', {
      titel: 'Details Game',
      error: extractErrorMessages(err),
    });
  }

  //console.log(gameId, '---', ownewId);

  res.redirect(`/games/${gameId}/details`);
});

router.get('/search', async (req, res) => {
  const { search, platform } = req.query;
  //console.log(search, platform);
  let games = null;
  try {
    games = await searchGames(search, platform);
  } catch (err) {
    return res.render('search', {
      titel: 'Search Game',
      error: extractErrorMessages(err),
    });
  }
  res.render('search', {
    title: 'Search Game',
    games,
  });
});
*/

module.exports = router;
