import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Theme, Page } from './enums';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Button from './Button';

const THEME_LIGHT_HEX: string = '#E2E8F0';
const THEME_DARK_HEX: string = '#1A202C';

interface IAppState {
  ThemeSwitch: Theme;
  Page: Page;
}

class App extends React.PureComponent<{}, IAppState> {
  state = {
    ThemeSwitch: Theme.Dark,
    Page: Page.Home,
  }

  setTheme = (theme: Theme) => {
    document.body.style.backgroundColor = theme === Theme.Dark ? THEME_DARK_HEX : THEME_LIGHT_HEX;
    this.setState({ ThemeSwitch: theme });
  }

  setPage = (page: Page) => {      
    this.setState({ Page: page });
  }

  render() {
    return (
      <Router>
        <div className={`container mx-auto ${this.state.ThemeSwitch === Theme.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} font-openSans text-sm md:text`}>
          <div className='mr-2 mt-2 flex justify-end'>
            <Button
              onClick={() => this.setTheme(Theme.Light)}
              text="Light"
              customClass={`hover:shadow-grayOutline bg-gray-400 mr-1 text-gray-900 rounded-l-lg h-6 ${this.state.ThemeSwitch === Theme.Light ? 'hover:shadow-none' : 'hover:bg-gray-200'}`}/>
            <Button
              onClick={() => this.setTheme(Theme.Dark)}
              text="Dark"
              customClass={`hover:shadow-grayOutline bg-gray-800 text-gray-300 rounded-r-lg h-6 ${this.state.ThemeSwitch === Theme.Dark ? 'hover:shadow-none' : 'hover:bg-gray-900'}`} />
          </div>  
          <div className='flex justify-between mt-2 ml-3 mr-3'>     
           {/* Light/Dark theme button */}              
            {/* Menu bar */}
            <div className='text-xs md:text-base'>
              <div className={`${this.state.Page !== Page.Home ? '' : 'hidden'} flex justify-evenly md:w-64`}>
                <Link to='/'>
                  <button className='mx-2 focus:outline-none' onClick={() => this.setState({Page: Page.Home})}>
                    <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Home ? 'text-teal-600' : ''}`}>Home</span>
                  </button>
                </Link>
                <Link to='/about'>
                  <button className='mx-2 focus:outline-none' onClick={() => this.setState({Page: Page.About})}>
                    <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.About ? 'text-teal-600' : ''}`}>About</span>
                  </button>
                </Link>
                <Link to='/portfolio'>
                  <button className='mx-2 focus:outline-none' onClick={() => this.setState({Page: Page.Portfolio})}>
                    <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Portfolio ? 'text-teal-600' : ''}`}>Portfolio</span>
                  </button>
                </Link>
                <Link to='/contact'>
                  <button className='mx-2 focus:outline-none' onClick={() => this.setState({Page: Page.Contact})}>
                    <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Contact ? 'text-teal-600' : ''}`}>Contact</span>
                  </button>
                </Link>
                <a href='https://medium.com/@timetraveller_x' target='_blank' rel='noopener noreferrer'>
                  <button className='focus:outline-none mx-2'>
                    <span className={`transform-transition duration-300 hover:text-teal-600`}>Blog</span>
                  </button>
                </a>
              </div>
            </div>                   
          </div>
        </div>
          
        <Switch>
          <React.Fragment>
            <div className={`${this.state.ThemeSwitch === Theme.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} font-openSans text-sm md:text mt-4 container mx-auto`}>
              <Route exact path='/'>
                <Home Theme={this.state.ThemeSwitch} SetPage={this.setPage} />
              </Route>
              <Route path='/about'>
                <About Theme={this.state.ThemeSwitch} SetPage={this.setPage} />
              </Route>
              <Route path='/portfolio'>
                <Portfolio Theme={this.state.ThemeSwitch} SetPage={this.setPage} />
              </Route>
              <Route path='/contact'>
                <Contact Theme={this.state.ThemeSwitch} SetPage={this.setPage} />
              </Route>
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;