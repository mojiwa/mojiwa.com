import React from 'react';

import { Filter } from './enums';
import Button from './Button';

interface IAppProps {

}

interface IAppState {
  ThemeSwitch: Filter;
}

class App extends React.PureComponent<IAppProps, IAppState> {
  state = {
    ThemeSwitch: Filter.Dark
  }

  render() {
    return (
      <div className={`${this.state.ThemeSwitch === Filter.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} h-screen`}>      
        <div className='right-0 fixed mr-1 mt-1'>
          <Button
            onClick={() => { this.setState({ThemeSwitch: Filter.Light })}}
            text="Light"
            customClass={`bg-gray-400 mr-1 text-gray-900 rounded-l-lg w-16 ${this.state.ThemeSwitch === Filter.Light ? 'hover:shadow-none' : 'hover:bg-gray-200'}`}/>
          <Button
            onClick={() => { this.setState({ThemeSwitch: Filter.Dark })}}
            text="Dark"
            customClass={`bg-gray-800 text-gray-300 rounded-r-lg w-16 ${this.state.ThemeSwitch === Filter.Dark ? 'hover:shadow-none' : 'hover:bg-gray-900'}`} />
        </div>
        <div className='mx-auto text-5xl center-content text-center'>
          <span>Hi, I'm <span className='italic'>Mo Jiwa</span>. </span>
          <br/><span>I'm a developer.</span>
        </div>
      </div>
    );
  }
}

export default App;
