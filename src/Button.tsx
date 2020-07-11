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
            className={`text-xs p-1 focus:outline-none transform-transition duration-300 ${this.props.customClass}`}>
              {this.props.text}              
            </button>
  }
}