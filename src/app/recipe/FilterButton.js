import React from "react";
import { Row, Col, ButtonGroup, Button } from "reactstrap";

function FilterButton({ items, onClick }) {
  return (
    <Row>
      <Col md={11}>
        <ButtonGroup className="w-100">
          {items.map((item) => (
            <Button
              key={`filter__button-${item.text}`}
              color="primary"
              active={item.actived}
              onClick={() => onClick(item.text)}
            >
              <img src={item.icon} alt={`Icon ${item.text}`} />
              {item.text}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
    </Row>
  );
}

export default FilterButton;
