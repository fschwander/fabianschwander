import React from 'react';
import {Col} from 'reactstrap';
import './UrlItem.scss';

interface UrlItemProps {
  data: any,
  index: number
}

export const UrlItem: React.FC<UrlItemProps> = props => {
  const {data, index} = props;
  return (
    <Col className={'UrlItem'} key={data.name + index}
         xs={12} sm={6} md={4}
         onClick={() => window.open(data.url, '_blank')}>
      <div className={'inner-container button'}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </Col>
  );
};
