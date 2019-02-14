import * as React from "react";
import portrait from '../res/portrait.svg';

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='LandingPage'>

        <img src={portrait} className="background-logo" alt="logo" />


      </div>
    )
  }
}