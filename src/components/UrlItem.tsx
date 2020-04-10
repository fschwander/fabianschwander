import React from 'react';
import {Col} from 'reactstrap';
import './UrlItem.scss';

interface UrlItemProps {
  data: any
}

export const UrlItem: React.FC<UrlItemProps> = props => {
  const {data} = props;

  const colors = ['deeppink', 'deepskyblue', 'rebeccapurple'];

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const getRandomDeg = () => Math.floor(Math.random() * 360);

  const getAlternatingColor = (discardedColors: Array<string>): string => {
    let newColor = getRandomColor();
    discardedColors.forEach(color => {
      while (newColor === color) newColor = getRandomColor();
    });
    return newColor;
  };

  const getRandomGradient = () => {
    const color1 = getRandomColor();
    const color2 = getAlternatingColor([color1]);
    return `linear-gradient(${getRandomDeg()}deg, ${color1}, ${color2})`;
  };

  return (
    <Col className={'UrlItem'}
         xs={12} sm={6} md={4}
         onClick={() => window.open(data.url, '_blank')}>
      <div className={'inner-container button'}
           style={{backgroundImage: getRandomGradient()}}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </Col>
  );
};
