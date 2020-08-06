import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import initialFieldByFilterButtons from './fieldByFilterButtons';
import Search from './Search';
import FilterButton from './FilterButton';
import ListResult from './ListResult';
import API from '../api';
import Header from '../../screens/layout/Header';
import {
  setRecipe,
  setRecipes,
  setSearchRecipes,
  setFilterButtonValue,
  setSelectedRecipe,
  getRecipes,
} from '../../redux/actions';

export function Recipe({
  recipe,
  recipes,
  searchRecipes,
  setRecipes,
  setFilterButtonValue,
  setSelectedRecipe,
  setSearchRecipes,
  history,
}) {
  const [fieldByFilterButtons, setFieldByFilterButtons] = useState(
    initialFieldByFilterButtons,
  );

  const getRandomRecipes = useCallback(async () => {
    try {
      const response = await API.getRandomRecipes(10);
      setRecipes(response.data.recipes);
      return 'ok';
    } catch (e) {
      const error = typeof e === 'string' ? e : 'Hubo un error inesperado, reintenta.';
      return error;
    }
  }, [setRecipes]);

  const onSearchRecipe = async value => {
    try {
      const response = await API.getSearchRecipe(value);
      setSearchRecipes(response);
    } catch (e) {
      setSearchRecipes([]);
    }
  };

  const onClickFilterButton = text => {
    setFilterButtonValue(text);

    const newActivatedFilter = fieldByFilterButtons.map(filterButton => {
      if (filterButton.text === text) {
        return {
          ...filterButton,
          activated: true,
        };
      }

      return filterButton;
    });
    setFieldByFilterButtons(newActivatedFilter);

    onSearchRecipe(text);
    setRecipe('');
  };

  const onChange = value => {
    setRecipe(value);
  };

  const onClick = () => {
    onSearchRecipe(recipe);
    setRecipe('');
  };

  const onLink = recipeData => {
    setSelectedRecipe(recipeData);
    history.push(`details/${recipeData.id}`);
  };

  useEffect(() => {
    if (recipes.length === 0) {
      getRandomRecipes();
    }
  }, [getRandomRecipes, recipes]);

  return (
    <>
      <Header
        search={
          <Search recipe={recipe} onChange={onChange} onClick={onClick} />
        }
      />
      <FilterButton
        items={fieldByFilterButtons}
        onClick={onClickFilterButton}
      />
      {recipes && (
        <ListResult
          items={
            searchRecipes && searchRecipes.length === 0
              ? recipes
              : searchRecipes
          }
          onLink={onLink}
        />
      )}
    </>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.object),
  searchRecipes: PropTypes.arrayOf(PropTypes.object),
  setRecipes: PropTypes.func,
  setFilterButtonValue: PropTypes.func,
  setSearchRecipes: PropTypes.func,
  setSelectedRecipe: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Recipe.defaultProps = {
  recipe: '',
  recipes: [],
  searchRecipes: [],
  setRecipes: text => text,
  setFilterButtonValue: text => text,
  setSearchRecipes: text => text,
  setSelectedRecipe: text => text,
  history: {
    push: text => text,
  },
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  recipes: state.recipes,
  searchRecipes: state.searchRecipes,
});

const mapDispatchToProps = {
  setRecipe,
  setRecipes,
  setSearchRecipes,
  setFilterButtonValue,
  setSelectedRecipe,
  getRecipes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));
