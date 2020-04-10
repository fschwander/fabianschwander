import React from 'react';
import './UrlTile.scss';

interface UrlTileProps {
  data: any
}

export const UrlTile: React.FC<UrlTileProps> = props => {
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
    <div className={'UrlTile button'}
         onClick={() => window.open(data.url, '_blank')}
         style={{backgroundImage: getRandomGradient()}}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};
