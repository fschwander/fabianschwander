import './ScrollNavContainer.scss';
import React, {useState} from "react";
import {urlItems} from '../res/urlItemsData';

export const ScrollNavContainer: React.FC = () => {
  const [perspective, setPerspective] = useState(10);


  const createUrlItems = () => {
    return urlItems.map((el, i) => {
      return <div className={'item'}
                  style={{transform: `perspective(100px) translate3d(${i*perspective*5}px,${Math.pow(i,2)*perspective}px,${-i * perspective}px)`}}>
        <h2>{el.name}</h2>
        <p>{el.description}</p>
        <a target='_blank' rel='noopener noreferrer' href={`http://${el.url}`}>{el.url}</a>
      </div>;
    });
  };

  return (
    <div className={'ScrollNavContainer'}
         style={{maxHeight: `${window.innerHeight}px`, height: `${window.innerHeight}px`}}>
      <div className={'items-container'}>
        {createUrlItems()}
      </div>
    </div>
  );
};
