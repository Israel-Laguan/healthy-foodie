import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  Badge,
} from "reactstrap";

const styleLinkTo = {
  color: `white`,
  cursor: `pointer`,
};

function ListResult({ items, onLink }) {
  console.log(items);
  return (
    <>
      {items.length > 0 && (
        <Row>
          {items.map((item) => (
            <Col md={3} key={`search__recipe-${item.id}`}>
              <Card className="card bg-ligth">
                <CardImg
                  src={
                    item.image ||
                    "https://img.icons8.com/ios/200/000000/mushbooh-food.png"
                  }
                  top
                  width="100%"
                  alt={item.title}
                  style={styleLinkTo}
                  onClick={() => onLink(item)}
                />
                <CardBody
                  className="card-img-overlay"
                  style={styleLinkTo}
                  onClick={() => onLink(item)}
                >
                  <CardTitle style={{backgroundColor: "rgba(0,0,0,50%)"}}>
                    Health Score: <Badge>{item.healthScore}%</Badge>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <h4
                    style={{ cursor: `pointer` }}
                    onClick={() => onLink(item)}
                  >
                    {item.title}
                  </h4>
                  {item.dishTypes.map((dishType) => (
                    <Badge
                      key={`card__footer-${item.id}-${dishType}`}
                      color="success"
                      pill
                    >
                      {dishType}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default ListResult;
