import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Badge } from "reactstrap";

const styleLinkTo = {
  color: `#007bff`,
  cursor: `pointer`,
};

export function Recipe({ selectedRecipe, ...props }) {
  const toHome = useCallback(() => {
    props.history.push(`../home`);
  }, [props.history]);

  useEffect(() => {
    if (!selectedRecipe.id) {
      toHome();
    }
  }, [selectedRecipe, toHome]);

  return (
    <>
      <h1>Detalles</h1>
      {selectedRecipe.id && (
        <Row>
          <Col md={3}>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              width="100%"
            />
            <Col md={12}>
              {selectedRecipe.dishTypes.map((dishType) => (
                <Badge
                  key={`detail_card__footer-${selectedRecipe.id}-${dishType}`}
                  color="success"
                  pill
                >
                  {dishType}
                </Badge>
              ))}
            </Col>
          </Col>
          <Col md={9}>
            <h2>{selectedRecipe.title}</h2>
            <p style={styleLinkTo} onClick={() => toHome()}>
              Regresar
            </p>
            <h3>Ingredientes</h3>
            <ul className="list-group">
              {selectedRecipe.extendedIngredients.map((ingredient) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={`ingredient-${ingredient.name}`}
                >
                  {ingredient.name}
                  <span class="badge badge-primary badge-pill">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
            <h3>Resumen</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedRecipe.summary,
              }}
            ></div>
            <h3>Link de preparación de la receta</h3>
            <a href={selectedRecipe.spoonacularSourceUrl} target="_black">
              Abrir página de preparación
            </a>
          </Col>
        </Row>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));
