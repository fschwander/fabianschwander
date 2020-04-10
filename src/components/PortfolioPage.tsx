import './PortfolioPage.scss';
import React from "react";
import {urlItems} from '../res/urlItemsData';
import {Container, Row} from 'reactstrap';
import {UrlTile} from './UrlTile';
import {TileContainer} from './TileContainer';

export const PortfolioPage: React.FC = () => {

  const createUrlTiles = () => {
    return urlItems.map((el, i) => {
      return <TileContainer>
        <UrlTile data={el} key={el.name + i}/>
      </TileContainer>;
    });
  };

  return (
    <div className={'PortfolioPage'}>
      <Container>
        <Row>
          {createUrlTiles()}
        </Row>
      </Container>
    </div>
  );
};
