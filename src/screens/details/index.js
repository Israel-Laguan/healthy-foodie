import React from 'react';
import { Container } from 'reactstrap';
import Header from '../layout/Header';
import RecipeDetail from '../../app/recipe/detail';

function Details() {
  return (
    <Container>
      <Header />
      <RecipeDetail />
      <footer>
        <a href="https://spoonacular.com/food-api/docs">
          <img src="https://spoonacular.com/images/spoonacular-logo-b.svg" height="28px" alt="spoonacular" />
          Powered by Spoonacular
        </a>
      </footer>
    </Container>
  );
}

export default Details;
