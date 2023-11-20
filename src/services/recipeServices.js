import { environment } from '../environments/environments';

import * as request from './request';

const URL = `${environment.url}/recipes`;

export async function getAllRecipes() {
  const result = await request.get(URL);

  return result;
}

export async function createReciep(data) {
  const result = await request.post(`${URL}/new-recipe`, data);

  return result;
}

export async function getRecipe(recipeId) {
  const result = await request.get(`${URL}/${recipeId}/details`);

  return result;
}

export async function deleteRecipe(recipeId) {
  const result = await request.remove(`${URL}/${recipeId}/delete`);

  return result;
}

export async function editRecipe(recipeId, recipeData) {
  const result = await request.post(`${URL}/${recipeId}/edit`, recipeData);

  return result;
}
