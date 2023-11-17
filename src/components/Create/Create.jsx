import { useState, useEffect } from 'react';
import useTitleChange from '../../util/useTitleChange';
import './Create.css';
import FormRecipe from '../FormRecipe/FormRecipe';

export default function Create() {
  useTitleChange('Create');

  return (
    <>
      <div className='create-container'>
        <div className='create-recipe'>
          <h1>Създай Рецепта</h1>
          <FormRecipe />
        </div>
      </div>
    </>
  );
}
