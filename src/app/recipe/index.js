import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import initialFieldByFilterButtons from "./fieldByFilterButtons";
import Search from "./Search";
import FilterButton from "./FilterButton";
import ListResult from "./ListResult";
import API from "../api";
import Header from "../../screens/layout/Header";
import {
  setRecipe,
  setRecipes,
  setSearchRecipes,
  setFilterButtonValue,
  setSelectedRecipe,
  getRecipes,
} from "../../redux/actions";

export function Recipe({ recipe, recipes, searchRecipes, ...props }) {
  const [fieldByFilterButtons, setFieldByFilterButtons] = useState(
    initialFieldByFilterButtons
  );

  const getRandomRecipes = useCallback(async () => {
    try {
      const response = await API.getRandomRecipes(10);
      props.setRecipes(response.data.recipes);
    } catch (e) {
      const error =
        typeof e === `string` ? e : `Hubo un error inesperado, reintenta.`;
      console.log(error);
    }
  }, [props]);

  const onClickFilterButton = (text) => {
    props.setFilterButtonValue(text);

    setFieldByFilterButtons(
      fieldByFilterButtons.map((filterButton) => {
        filterButton.actived = filterButton.text === text;

        return filterButton;
      })
    );

    onSearchRecipe(text);
    props.setRecipe(``);
  };

  const onChange = (value) => {
    props.setRecipe(value);
  };

  const onSearchRecipe = async (value) => {
    try {
      const response = await API.getSearchRecipe(value);
      props.setSearchRecipes(response);
    } catch (e) {
      props.setSearchRecipes([]);
    }
  };

  const onClick = () => {
    onSearchRecipe(recipe);
    props.setRecipe(``);
  };

  const onLink = (recipeData) => {
    props.setSelectedRecipe(recipeData);
    props.history.push(`details/${recipeData.id}`);
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
      <ListResult
        items={searchRecipes.length === 0 ? recipes : searchRecipes}
        onLink={onLink}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
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
