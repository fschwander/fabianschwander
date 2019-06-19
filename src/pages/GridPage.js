import * as React from "react";
import portrait from '../res/imgs/portrait.svg'
import linked_in from '../res/icons/linked_in.svg'
import email from '../res/icons/email.svg'
import SvgContainer from "../res/link-imgs/SvgContainer";
import {Icons} from "../res/link-imgs/Icons";

export default class GridPage extends React.Component {

  render() {
    return (
      <div className='GridPage'>
        <div className='wrapper'>

          <a className='box a'
             href='http://www.innere-werte.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.tavolata}/>
          </a>

          <a className='box b'
             href='http://www.hofsterben.fabianschwander.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.hofsterben}/>
          </a>

          <a className='box b2' href='http://www.michelleakanji.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.michelleAkanji}/>
          </a>

          <div className='box c'>
            <a href='mailto:fschwander@gmx.ch'>
              <img src={ email } className="background-logo" alt="email"/>
            </a>
            <a href='https://www.linkedin.com/in/fabian-schwander/'
               target='_blank'
               rel='noreferrer noopener'>
              <img src={ linked_in } className="background-logo" alt="linked in"/>
            </a>
          </div>

          <div className='box d'>
            <h1 className='first'>PORTFOLIO</h1>
            <img src={ portrait } className="background-logo" alt="fabian schwander"/>
            <h1 className='second'>Fabian Schwander</h1>
          </div>

          <a className='box e'
             href='http://www.ponsyrus.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.ponsyrus}/>
          </a>

          <a className='box f'
             href='https://web0.fhnw.ch/modulvisualisierung'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.modulvisualisierung}/>
          </a>
        </div>
      </div>
    )
  }
}