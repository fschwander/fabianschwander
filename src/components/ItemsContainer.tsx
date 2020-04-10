import './ItemsContainer.scss';
import React from "react";
import {urlItems} from '../res/urlItemsData';
import {Col, Container, Row} from 'reactstrap';

export const ItemsContainer: React.FC = () => {

  const createUrlItems = () => {
    return urlItems.map((el, i) => {
      return <Col className={'item'} key={el.name + i}
                  xs={12} sm={6} md={4}
      onClick={() => window.open(el.url, '_blank')}>
        <h2>{el.name}</h2>
        <p>{el.description}</p>
      </Col>;
    });
  };

  return (
    <div className={'ItemsContainer'}>
      <Container>
        <Row>
          {createUrlItems()}
        </Row>
      </Container>
    </div>
  );
};
