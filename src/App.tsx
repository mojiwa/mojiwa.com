import React from 'react';

import { Filter, Page } from './enums';
import Button from './Button';

interface IAppProps {

}

interface IAppState {
  ThemeSwitch: Filter;
  Page: Page;
}

class App extends React.PureComponent<IAppProps, IAppState> {
  state = {
    ThemeSwitch: Filter.Dark,
    Page: Page.Home
  }

  render() {
    return (
      <div className={`${this.state.ThemeSwitch === Filter.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} h-screen font-roboto`}>
        <div className={`header absolute sticky ${this.state.Page === Page.Home ? 'hidden' : ''}`}>
          <div className='flex justify-between w-auto sm:w-64'>
            <button className='mr-2' onClick={() => this.setState({Page: Page.Home})}>
              <span style={{transition: "0.3s"}} className={`hover:text-teal-600 ${this.state.Page === Page.Home ? 'text-teal-600' : ''}`}>Home</span>
            </button>
            <button className='mr-2' onClick={() => this.setState({Page: Page.About})}>
              <span style={{transition: "0.3s"}} className={`hover:text-teal-600 ${this.state.Page === Page.About ? 'text-teal-600' : ''}`}>About</span>
            </button>
            <button className='mr-2' onClick={() => this.setState({Page: Page.Portfolio})}>
              <span style={{transition: "0.3s"}} className={`hover:text-teal-600 ${this.state.Page === Page.Portfolio ? 'text-teal-600' : ''}`}>Portfolio</span>
            </button>
            <button onClick={() => this.setState({Page: Page.Contact})}>
              <span style={{transition: "0.3s"}} className={`hover:text-teal-600 ${this.state.Page === Page.Contact ? 'text-teal-600' : ''}`}>Contact</span>
            </button>
          </div>
        </div>
        <div className='right-0 fixed mr-1 mt-1'>
          <Button
            onClick={() => { this.setState({ThemeSwitch: Filter.Light })}}
            text="Light"
            customClass={`hover:shadow-grayOutline bg-gray-400 mr-1 text-gray-900 rounded-l-lg w-16 ${this.state.ThemeSwitch === Filter.Light ? 'hover:shadow-none' : 'hover:bg-gray-200'}`}/>
          <Button
            onClick={() => { this.setState({ThemeSwitch: Filter.Dark })}}
            text="Dark"
            customClass={`hover:shadow-grayOutline bg-gray-800 text-gray-300 rounded-r-lg w-16 ${this.state.ThemeSwitch === Filter.Dark ? 'hover:shadow-none' : 'hover:bg-gray-900'}`} />
        </div>
        <div className={`${this.state.Page === Page.Home ? '' : 'hidden'}`}>           
          <div className='font-thin center-content text-center cursor-default'>
            <span className='text-5xl'>Hi, I'm <span style={{transition: "0.5s"}} className='font-normal hover:text-teal-600'>Mo Jiwa</span>.</span>
            <br />
            <span className='text-3xl'>I'm a full-stack software developer</span>
            <div>
              <button 
                onClick={() => {this.setState({Page: Page.About})}}      
                style={{transition: "0.3s"}}     
                onMouseOver={() => document.getElementById('see-more-svg').classList.add('rotate-svg')}     
                onMouseLeave={() => document.getElementById('see-more-svg').classList.remove('rotate-svg')}  
                className={`see-more-button mt-4 focus:outline-none font-thin text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600 ${this.state.ThemeSwitch === Filter.Dark ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'}`}>
                  See More  <svg id='see-more-svg' className='inline' height="20px" width="20px" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
              </button>
            </div>
          </div>          
        </div>
        <div className={`${this.state.Page === Page.About ? '' : 'hidden'}`}>          
          <div>
            
          </div>         
        </div>
        <div className={`${this.state.Page === Page.Portfolio ? '' : 'hidden'}`}>          
          <div>
            
          </div>         
        </div>
        <div className={`${this.state.Page === Page.Contact ? '' : 'hidden'}`}>          
          <div>
            
          </div>         
        </div>
      </div>
    );
  }
}

export default App;
