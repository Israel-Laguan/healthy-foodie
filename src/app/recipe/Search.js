import React from "react";
import { Button, FormGroup, Input, Form } from "reactstrap";

function Search({ recipe, onChange, onClick }) {
  return (
    <Form inline>
      <FormGroup className="d-flex">
        <Input
          bsSize="lg"
          type="text"
          value={recipe}
          placeholder="Search a Recipe"
          onChange={(e) => onChange(e.target.value)}
        />
        <Button onClick={onClick} className="d-flex p-0">
          <img
            src="https://img.icons8.com/doodle/48/000000/search--v1.png"
            alt="Search Button"
          />
        </Button>
      </FormGroup>
    </Form>
  );
}

export default Search;