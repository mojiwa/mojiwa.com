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
            className={`p-1 focus:outline-none hover:shadow-grayOutline ${this.props.customClass}`}
            style={{transition: "0.5s"}}
            >
              {this.props.text}
            </button>
  }
}