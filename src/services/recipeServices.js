import { environment } from '../environments/environments';

import * as request from './request';

const URL = `${environment.url}/recipes`;

export async function getAllRecipes() {
  const result = await request.get(URL);

  return result;
}

export async function getOwnerRecipes(ownerId) {
  const result = await request.get(URL);

  const ownerRecipes = result.filter((x) => x.userId == ownerId);

  return ownerRecipes;
}

export async function createReciep(data) {
  const result = await request.post(`${URL}/new-recipe`, data);

  return result;
}

export async function getRecipe(recipeId) {
  const result = await request.get(`${URL}/${recipeId}/details`);

  return result;
}

export async function removeRecipe(recipeId) {
  const result = await request.remove(`${URL}/${recipeId}/delete`);

  return result;
}

export async function editRecipe(recipeId, recipeData) {
  const result = await request.post(`${URL}/${recipeId}/edit`, recipeData);

  return result;
}

export async function search(char) {
  const result = await request.get(`${environment.url}/search?title=${char}`);

  return result;
}
