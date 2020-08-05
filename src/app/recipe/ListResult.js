import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  Badge,
  Alert,
} from 'reactstrap';

const styleLinkTo = {
  color: 'white',
  cursor: 'pointer',
};

const ListResult = ({ items, onLink }) => (
  <Row>
    {items.length > 0 ? (
      items.map(item => (
        <Col md={3} key={`search__recipe-${item.id}`}>
          <Card className="card bg-ligth">
            <CardImg
              src={
                  item.image
                  || 'https://img.icons8.com/ios/200/000000/mushbooh-food.png'
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
              <CardTitle style={{ backgroundColor: 'rgba(0,0,0,50%)' }}>
                Health Score:
                {' '}
                <Badge>
                  {item.healthScore}
                  %
                </Badge>
              </CardTitle>
            </CardBody>
            <CardFooter>
              <Button
                block
                color="link"
                size="lg"
                className="text-dark"
                onClick={() => onLink(item)}
              >
                {item.title}
              </Button>
              {item.dishTypes.map(dishType => (
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
      ))
    ) : <Alert>No recipes found!</Alert>}
  </Row>
);

ListResult.propTypes = {
  items: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  onLink: PropTypes.func,
};

ListResult.defaultProps = {
  items: {
    length: 0,
    map: () => {},
  },
  onLink: () => {},
};

export default ListResult;
