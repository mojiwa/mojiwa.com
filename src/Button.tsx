import React from 'react';

interface IButtonProps {
  onClick: Function;
  text: string;    
  customClass: string;  
}

interface IButtonState {

}

export default class Button extends React.PureComponent<IButtonProps, IButtonState> {
  
  render() {
    return <button onClick={() => this.props.onClick()}
            className={`p-1 focus:outline-none ${this.props.customClass}`}
            style={{transition: "0.3s"}}
            >
              {this.props.text}              
            </button>
  }
}