import * as React from "react";

export default class SvgContainer extends React.Component {

  constructor(params) {
    super(params);

    this.style = {
      preserveAspectRatio: 'none',
      viewBox: `0 0 300 200`
    };
    this.width = this.props.width === undefined ? 100 : this.props.width;
    this.fill = this.props.fill === undefined ? '#222' : this.props.fill;
  }

  render() {
    const {style: {viewBox}} = this;

    return (
        <svg className={`link-icon ${this.props.className || ""}`}
             viewBox={viewBox}
             preserveAspectRatio='none'
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
          <g>
            <path d={this.props.src} fillRule="nonzero"/>
          </g>
        </svg>
    )
  }
}