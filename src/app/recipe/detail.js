import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Jumbotron,
} from "reactstrap";

export function Recipe({ selectedRecipe, ...props }) {
  const toHome = useCallback(() => {
    props.history.push(`../home`);
  }, [props.history]);

  useEffect(() => {
    if (!selectedRecipe.id) {
      toHome();
    }
  }, [selectedRecipe, toHome]);

  console.log(selectedRecipe);
  return (
    <Jumbotron>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Details</BreadcrumbItem>
      </Breadcrumb>
      {selectedRecipe.id && (
        <Row>
          <Col md={5}>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              width="100%"
            />
            <Col md={12}>
              {selectedRecipe.dishTypes.map((dishType) => (
                <h3
                  key={`detail_card__footer-${selectedRecipe.id}-${dishType}`}
                >
                  <Badge color="success" outline="true">
                    {dishType}
                  </Badge>
                </h3>
              ))}
            </Col>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedRecipe.summary,
              }}
            ></div>
          </Col>
          <Col md={7}>
            <h2>{selectedRecipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul className="list-group">
              {selectedRecipe.extendedIngredients.map((ingredient, id) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={`ingredient-${ingredient.name}-${id}`}
                >
                  {ingredient.name}
                  <span className="badge badge-info badge-pill">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
            <h3>Recipe link:</h3>
            <a href={selectedRecipe.spoonacularSourceUrl} target="_black">
              <img
                src="https://img.icons8.com/doodle/48/000000/cooking-book.png"
                alt="recipe icon"
              />
              Open recipe from Spoonacular!
            </a>
          </Col>
        </Row>
      )}
    </Jumbotron>
  );
}

const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));
