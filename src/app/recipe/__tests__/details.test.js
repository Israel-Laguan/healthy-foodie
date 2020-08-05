import React from 'react';
import renderer from 'react-test-renderer';
import { Recipe } from '../detail';

describe('src/app/recipe:details', () => {
  it('render', () => {
    const props = {
      selectedRecipe: {
        id: '1',
        image: '#',
        title: 'My recipe',
        dishTypes: ['Italian'],
        summary: 'Some description',
        spoonacularSourceUrl: '#',
        extendedIngredients: [''],
      },
      history: {
        push: a => a,
      },
    };
    const component = renderer.create(
      <Recipe history={props.history} selectedRecipe={props.selectedRecipe} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
