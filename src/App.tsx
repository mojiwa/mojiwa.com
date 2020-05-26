import React from 'react';

import { Theme, Page } from './enums';
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
  'Coded UI',
  'Node.js',  
  'Tailwind CSS',
];

const THEME_LIGHT_HEX: string = '#E2E8F0';
const THEME_DARK_HEX: string = '#1A202C';

interface IAppProps {

}

interface IAppState {
  ThemeSwitch: Theme;
  Page: Page;
}

class App extends React.PureComponent<IAppProps, IAppState> {
  state = {
    ThemeSwitch: Theme.Dark,
    Page: Page.Home
  }

  setTheme = (theme: Theme) => {
    document.body.style.backgroundColor = theme === Theme.Dark ? THEME_DARK_HEX : THEME_LIGHT_HEX;
    this.setState({ ThemeSwitch: theme });
  }

  render() {
    return (
      <div className={`${this.state.ThemeSwitch === Theme.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} w-screen h-screen font-openSans`}>
        {/* Menu bar */}
        <div className={`header absolute sticky ${this.state.Page !== Page.Home ? 'custom-show' : 'custom-hidden'}`}>
          <div className='flex justify-between w-auto sm:w-64'>
            <button className='mr-2 focus:outline-none' onClick={() => this.setState({Page: Page.Home})}>
              <span className={`transform-transition duration-300 hover:text-teal-600 ${this.state.Page === Page.Home ? 'text-teal-600' : ''}`}>Home</span>
            </button>
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
        <div className='right-0 fixed mr-1 mt-1'>
          <Button
            onClick={() => this.setTheme(Theme.Light)}
            text="Light"
            customClass={`hover:shadow-grayOutline bg-gray-400 mr-1 text-gray-900 rounded-l-lg w-16 ${this.state.ThemeSwitch === Theme.Light ? 'hover:shadow-none' : 'hover:bg-gray-200'}`}/>
          <Button
            onClick={() => this.setTheme(Theme.Dark)}
            text="Dark"
            customClass={`hover:shadow-grayOutline bg-gray-800 text-gray-300 rounded-r-lg w-16 ${this.state.ThemeSwitch === Theme.Dark ? 'hover:shadow-none' : 'hover:bg-gray-900'}`} />
        </div>
        {/* Home page */}
        <div className={`${this.state.Page === Page.Home ? 'custom-show' : 'custom-hidden'}`}>           
          <div className={`font-thin center-content text-center cursor-default`} >
            <span className='text-5xl'>Hi, I'm <span className='font-normal text-teal-600'>Mo Jiwa</span>.</span>
            <br />
            <span className='text-3xl'>I'm a full-stack software developer</span>
            <div>
              <button 
                onClick={() => {this.setState({Page: Page.About})}}                        
                onMouseOver={() => document.getElementById('see-more-svg').classList.add('rotate-svg')}     
                onMouseLeave={() => document.getElementById('see-more-svg').classList.remove('rotate-svg')}  
                className={`see-more-button mt-4 focus:outline-none font-thin text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600 ${this.state.ThemeSwitch === Theme.Dark ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'}`}>
                  See More  <svg id='see-more-svg' className='inline transition-transform duration-300' height="20px" width="20px" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
              </button>
            </div>
          </div>          
        </div>
        {/* About page */}
        <div className={`${this.state.Page === Page.About ? 'custom-show' : 'custom-hidden'} page-location`}>          
          <div className='flex'>
            <div>
              <img 
                src={'images/mo-jedi.jpg'} 
                alt='Mo Jiwa'
                className={`${this.state.ThemeSwitch === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} border-gray-300 border-solid border-2 rounded-full w-32 md:w-64 h-32 md:h-64 m:border-4 my-image cursor-pointer`}
                onClick={() => this.setState({Page: Page.Contact})}/>
            </div>         
            <div className='m-10 flex-row cursor-default'>
              <p>I am a software developer living and working in the UK.
              <br />I work for a company based in London that designs and builds financial and commodities trading software.</p>
              <br />
              <p>I primarily work in an MSSQL -> .Net (C# | WPF) tech stack; but more recently find myself venturing into 
                <br />Linux -> Docker -> MySQL -> Python -> Node -> React, where I have created a number of <span className='transition-colors duration-300 ease-in-out underline cursor-pointer hover:text-teal-600' onClick={() => this.setState({Page: Page.Portfolio})}>internal tools</span>
                <br /> and hackathon projects.</p>
              <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
                <span className='transition-colors duration-300 hover:text-teal-600 text-2xl ml-4'>Skills</span>
                <ul>                
                  {LIST_OF_SKILLS.map((skill: string) =>
                    <li className='ml-6 hover:text-teal-600' key={skill}>{skill}</li>
                  )}
                </ul>
              </div>  
              <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
                <ul>
                <span className='transition-colors duration-300 hover:text-teal-600 text-2xl ml-4'>Weapons of Choice</span>
                  {LIST_OF_TOOLS.map((tool: string) =>
                    <li className='ml-6 hover:text-teal-600' key={tool}>{tool}</li>
                  )}
                </ul>
              </div>   
            </div> 
            <div className='mt-32'>
            <svg 
              className='cursor-pointer transition-colors duration-300 ease-linear hover:text-teal-600'
              onClick={() => this.setState({ Page: Page.Portfolio })}
              fill="currentColor" 
              height="40px"
              width="40px"
              viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                clip-rule="evenodd" 
                fill-rule="evenodd">
              </path>
            </svg>
          </div>         
          </div>  
        </div>
        {/* Portfolio page */}
        <div className={`${this.state.Page === Page.Portfolio ? 'custom-show' : 'custom-hidden'} page-location`}>          
          <div>
            Please hang in there, this page is coming...
          </div>         
        </div>
        {/* Contact page */}
        <div className={`${this.state.Page === Page.Contact ? 'custom-show' : 'custom-hidden'} page-location`}>          
          <div>
          </div>         
        </div>
      </div>
    );
  }
}

export default App;
