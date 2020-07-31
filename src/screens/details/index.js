import React from "react";
import { Container } from "reactstrap";
import Header from "../layout/Header";
import RecipeDetail from "../../app/recipe/detail";

function Details() {
  return (
    <Container>
      <Header />
      <RecipeDetail />
    </Container>
  );
}

export default Details;
