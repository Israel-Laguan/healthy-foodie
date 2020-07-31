import React from "react";
import { Row, Col, Button, FormGroup, Input } from "reactstrap";

function Search({ recipe, onChange, onClick }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      
      <Row form>
        <Col md={11}>
          <FormGroup>
            <Input
              type="text"
              value={recipe}
              placeholder="Buscador recetas"
              onChange={(e) => onChange(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={1}>
          <Button onClick={onClick} className="d-flex ">
            <img
              src="https://img.icons8.com/doodle/48/000000/search--v1.png"
              alt="Search Button"
            />
            Find
          </Button>
        </Col>
      </Row>
    </nav>
  );
}

export default Search;
