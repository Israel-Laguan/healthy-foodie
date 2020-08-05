import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Jumbotron,
} from 'reactstrap';
import PropTypes from 'prop-types';

export function Recipe({ selectedRecipe, history }) {
  const toHome = useCallback(() => {
    history.push('../home');
  }, [history]);

  useEffect(() => {
    if (!selectedRecipe.id) {
      toHome();
    }
  }, [selectedRecipe, toHome]);

  return (
    <Jumbotron>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Details</BreadcrumbItem>
      </Breadcrumb>
      {selectedRecipe.id && (
        <Row>
          <Col md={8}>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              width="100%"
            />
            <Col md={12}>
              {selectedRecipe.dishTypes.map(dishType => (
                <h3
                  key={`detail_card__footer-${selectedRecipe.id}-${dishType}`}
                >
                  <Badge color="success" outline="true">
                    {dishType}
                  </Badge>
                </h3>
              ))}
            </Col>
            <div>{selectedRecipe.summary}</div>
          </Col>
          <Col md={4}>
            <h2>{selectedRecipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul className="list-group">
              {selectedRecipe.extendedIngredients.map(ingredient => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={`ingredient-${ingredient.name}`}
                >
                  {ingredient.name}
                  <span className="badge badge-info badge-pill">
                    {ingredient.amount}
                    {' '}
                    {ingredient.unit}
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

Recipe.propTypes = {
  selectedRecipe: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    dishTypes: PropTypes.arrayOf({
      dishType: PropTypes.string,
    }),
    summary: PropTypes.string,
    spoonacularSourceUrl: PropTypes.string,
    extendedIngredients: PropTypes.arrayOf({
      ingredient: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Recipe.defaultProps = {
  selectedRecipe: {
    id: '1',
    image: '',
    title: '',
    dishTypes: [],
    summary: '',
    spoonacularSourceUrl: '',
    extendedIngredients: [''],
  },
  history: {
    push: a => a,
  },
};

const mapStateToProps = state => ({
  selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));
