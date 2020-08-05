import React from 'react';
import renderer from 'react-test-renderer';
import ListResult from '../ListResult';

describe('src/app/recipe:details', () => {
  it('render buttons when filters provided', () => {
    const recipes = [
      {
        id: 1,
        image: '',
        healthScore: '23',
        title: '',
        dishTypes: [''],
      },
    ];
    const component = renderer.create(
      <ListResult items={recipes} onLink={e => e.target.value} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('redirect to home when no filters provided', () => {
    const component = renderer.create(
      <ListResult onLink={e => e.target.value} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
