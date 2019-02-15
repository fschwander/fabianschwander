import * as React from "react";
import portrait from '../res/portrait.svg'
import linked_in from '../res/icons/linked_in.svg'
import email from '../res/icons/email.svg'

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='LandingPage'>
        <div className='wrapper'>

          <a className='box a' href='http://www.michelleakanji.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <span>Michelle Akanji</span>
          </a>

          <a className='box b'
             href='http://www.innere-werte.ch'
             target='_blank'
             rel='noreferrer noopener'>
            <span>Tavolata für innere Werte</span>
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
            <span>Ponsyrus</span>
          </a>

          <a className='box f'
             href='https://web0.fhnw.ch/modulvisualisierung'
             target='_blank'
             rel='noreferrer noopener'>
            <span>Interaktive Modulvisualisierung</span>
          </a>
        </div>
      </div>
    )
  }
}