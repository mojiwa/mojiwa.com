import React from 'react';

import { Theme, Page } from './enums';

interface IBlogProps {
    Theme: Theme;
    SetPage: Function;
}

export default class Blog extends React.PureComponent<IBlogProps, {}> {

  componentDidMount = () => { 
    this.props.SetPage(Page.About);
  }
  
  componentDidUpdate = () => {
    this.props.SetPage(Page.About);
  }

  render() {
    return(
      <div className='md:mx-auto md:w-10/12'>
     
      </div>          
    );
  }
}