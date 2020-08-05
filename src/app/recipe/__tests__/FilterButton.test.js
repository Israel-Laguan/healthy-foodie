import React from 'react';
import renderer from 'react-test-renderer';
import FilterButton from '../FilterButton';
import fields from '../fieldByFilterButtons';

describe('src/app/recipe:details', () => {
  it('render buttons when filters provided', () => {
    const component = renderer.create(
      <FilterButton items={fields} onClick={e => e.target.value} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('redirect to home when no filters provided', () => {
    const component = renderer.create(
      <FilterButton onClick={e => e.target.value} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
