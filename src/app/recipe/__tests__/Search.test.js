import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('src/app/recipe:details', () => {
  it('render buttons when filters provided', () => {
    const recipe = 'Test Recipe';
    const component = renderer.create(
      <Search recipe={recipe} onChange={a => a} onClick={a => a} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
