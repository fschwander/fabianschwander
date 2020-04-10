import React from 'react';
import './TileContainer.scss';
import {Col} from 'reactstrap';

export const TileContainer: React.FC = props => {
  return (
    <Col className={'TileContainer'} xs={12} sm={6} md={4}>
      {props.children}
    </Col>);
};
