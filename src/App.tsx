import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Theme, Page } from './enums';
import Home from './Home';
import Button from './Button';

const LIST_OF_SKILLS : string[] = [
  'C#',
  'WPF',
  'SQL',
  'Powershell',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Agile: Scrum | Kanban',
  'TDD',
  'Coded UI',
];

const LIST_OF_TOOLS : string[] = [
  'Visual Studio',
  'Visual Studio Code',
  'Rider',
  'MSSQL',
  'MySQL',
  'Git',
  'Docker',
  'Hyper-V',
  'NUnit',  
  'Node.js',  
  'Tailwind CSS',
  'Lightsaber',
];

const THEME_LIGHT_HEX: string = '#E2E8F0';
const THEME_DARK_HEX: string = '#1A202C';

interface IAppState {
  ThemeSwitch: Theme;
  Page: Page;
}

class App extends React.PureComponent<{}, IAppState> {
  state = {
    ThemeSwitch: Theme.Dark,
    Page: Page.Home
  }

  setTheme = (theme: Theme) => {
    document.body.style.backgroundColor = theme === Theme.Dark ? THEME_DARK_HEX : THEME_LIGHT_HEX;
    this.setState({ ThemeSwitch: theme });
  }

  setPage = (page: Page) => {
    this.setState({ Page: page });
  }

  slideElement(elementId: string) {
    var element = document.getElementById(elementId);
    if (element.classList.contains('slide-down')) {
      element.classList.remove('slide-down');
      element.classList.add('slide-up');
    } else {
      element.classList.add('slide-down');
      element.classList.remove('slide-up');
    }
  }

  render() {
    return (
      <Router>
        <div className={`${this.state.ThemeSwitch === Theme.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} font-openSans text-sm md:text`}>
          <div className='flex justify-between mt-2 ml-3 mr-3'>          
            {/* Menu bar */}
            <div className='text-xs md:text-base'>
              <div className={`${this.state.Page !== Page.Home ? '' : 'hidden'} flex justify-evenly md:w-64`}>
                <Link to='/'>
                  <button className='mr-2 focus:outline-none' onClick={() => this.setState({Page: Page.Home})}>
                    <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Home ? 'text-teal-600' : ''}`}>Home</span>
                  </button>
                </Link>
                <button className='mr-2 focus:outline-none' onClick={() => this.setState({Page: Page.About})}>
                  <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.About ? 'text-teal-600' : ''}`}>About</span>
                </button>
                <button className='mr-2 focus:outline-none' onClick={() => this.setState({Page: Page.Portfolio})}>
                  <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Portfolio ? 'text-teal-600' : ''}`}>Portfolio</span>
                </button>
                <button className='focus:outline-none' onClick={() => this.setState({Page: Page.Contact})}>
                  <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Contact ? 'text-teal-600' : ''}`}>Contact</span>
                </button>
              </div>
            </div>        
            {/* Light/Dark theme button */}
            <div className='ml-2'>
              <Button
                onClick={() => this.setTheme(Theme.Light)}
                text="Light"
                customClass={`hover:shadow-grayOutline bg-gray-400 mr-1 text-gray-900 rounded-l-lg md:w-16 md:h-auto h-6 ${this.state.ThemeSwitch === Theme.Light ? 'hover:shadow-none' : 'hover:bg-gray-200'}`}/>
              <Button
                onClick={() => this.setTheme(Theme.Dark)}
                text="Dark"
                customClass={`hover:shadow-grayOutline bg-gray-800 text-gray-300 rounded-r-lg md:w-16 md:h-auto h-6 ${this.state.ThemeSwitch === Theme.Dark ? 'hover:shadow-none' : 'hover:bg-gray-900'}`} />
            </div>
          </div>
        </div>
          
        <Switch>
          <Route path='/'>
            <Home Theme={this.state.ThemeSwitch} SetPage={this.setPage} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
