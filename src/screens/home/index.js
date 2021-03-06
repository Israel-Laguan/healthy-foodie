import React from 'react';
import { Container } from 'reactstrap';
import RecipeContainer from '../../app/recipe';

function Home() {
  return (
    <Container>
      <RecipeContainer />
      <footer>
        <a href="https://spoonacular.com/food-api/docs">
          <img src="https://spoonacular.com/images/spoonacular-logo-b.svg" height="28px" alt="spoonacular" />
          Powered by Spoonacular
        </a>
      </footer>
    </Container>
  );
}

export default Home;
