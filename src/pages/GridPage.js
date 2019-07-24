import * as React from "react";
import portrait from '../res/imgs/img_portrait.svg'
import SvgContainer from "../res/SvgContainer";
import {Icons} from "../res/Icons";

export default class GridPage extends React.Component {

  render() {
    return (
      <div className='GridPage'>
        <div className='wrapper'>

          <a className='box a'
             href='http://www.innere-werte.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.tavolata}
                          className='link-box'/>
          </a>

          <a className='box a2'
             href='http://www.isabelakanji.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.isabelAkanji}
                          className='link-box'/>
          </a>

          <a className='box b'
             href='http://www.hofsterben.fabianschwander.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.hofsterben}
                          className='link-box'/>
          </a>

          <a className='box b2' href='http://www.michelleakanji.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.michelleAkanji}
                          className='link-box'/>
          </a>

          <div className='box c'>
            <a href='mailto:fschwander@gmx.ch'
               className='link-icon'>
              <SvgContainer
                src={Icons.email}
                className='icon icon-email'
                width={44} height={44}/>
            </a>
            <a href='https://www.linkedin.com/in/fabian-schwander/'
               className='link-icon'
               target='_blank'
               rel='noreferrer noopener'>
              <SvgContainer
                src={Icons.linkedIn}
                className='icon icon-linked-in'
                width={44} height={44}/>
            </a>
          </div>

          <div className='box d'>
            <h1 className='first'>PORTFOLIO</h1>
            <img src={portrait} className="background-logo" alt="fabian schwander"/>
            <h1 className='second'>Fabian Schwander</h1>
          </div>

          <a className='box e'
             href='http://www.ponsyrus.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.ponsyrus}
                          className='link-box'/>
          </a>

          <a className='box f'
             href='https://web0.fhnw.ch/modulvisualisierung'
             target='_blank'
             rel='noreferrer noopener'>
            <SvgContainer src={Icons.modulvisualisierung}
                          className='link-box'/>
          </a>
        </div>
      </div>
    )
  }
}