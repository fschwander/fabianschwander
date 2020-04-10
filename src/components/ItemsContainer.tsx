import './ItemsContainer.scss';
import React from "react";
import {urlItems} from '../res/urlItemsData';
import {Container, Row} from 'reactstrap';
import {UrlItem} from './UrlItem';

export const ItemsContainer: React.FC = () => {

  const createUrlItems = () => {
    return urlItems.map((el, i) => {
      return <UrlItem data={el} index={i}/>
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
