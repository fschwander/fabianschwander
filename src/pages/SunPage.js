import * as React from "react";
import sun1 from '../res/imgs/img_sun1.svg'
import sun2 from '../res/imgs/img_sun2.svg'

export default class SunPage extends React.Component {

  render() {
    return (
      <div className='SunPage'>
        <img className='sun rotate' src={ sun1 } alt='Sun'/>
        <img className='sun rotate-reverse' src={ sun2 } alt='Sun'/>
        <svg>
          <circle/>
        </svg>
      </div>
    )
  }
}