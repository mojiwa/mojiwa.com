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
      <div className={`${this.state.ThemeSwitch === Theme.Dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-300 text-gray-900'} font-openSans text-sm md:text`}>
        <div className='flex justify-between mt-2 ml-3 mr-3'>          
          {/* Menu bar */}
          <div className='text-xs md:text-base'>
            <div className={`${this.state.Page !== Page.Home ? '' : 'hidden'} flex justify-evenly md:w-64`}>
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
        
        {/* Home page */}
        <div className={`${this.state.Page === Page.Home ? '' : 'hidden'}`}>           
          <div className={`font-thin center-content text-center cursor-default`} >
            <span className='text-xl md:text-5xl'>Hi, I'm <span className='font-normal text-teal-600'>Mo Jiwa</span>.</span>
            <br />
            <span className='text-lg md:text-3xl'>I'm a full-stack software developer</span>
            <div>
              <button 
                onClick={() => {this.setState({Page: Page.About})}}                        
                onMouseOver={() => document.getElementById('see-more-svg').classList.add('rotate-svg')}     
                onMouseLeave={() => document.getElementById('see-more-svg').classList.remove('rotate-svg')}  
                className={`see-more-button mt-4 focus:outline-none font-thin text-md md:text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600 ${this.state.ThemeSwitch === Theme.Dark ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'}`}>
                  See More  <svg id='see-more-svg' className='inline transition-transform duration-300' height="20px" width="20px" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
              </button>
            </div>
          </div>          
        </div>
        {/* About page */}
        <div 
          className={`${this.state.Page === Page.About ? '' : 'hidden'} container mx-auto mt-10`}>
          <div className='flex-row'>
            <img 
              src={'images/mo-jedi.jpg'} 
              alt='Mo Jiwa'              
              className={`${this.state.ThemeSwitch === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} mt-4 w-3/6 sm:w-64 sm:h-auto sm:ml-2 ml-1/4 border-gray-300 border-solid border-2 rounded-md md:border-4 my-image cursor-pointer`}
              onClick={() => this.setState({Page: Page.Contact})}/>            
            <div className='text-xs mt-4 md:text-base ml-2'>
              <p>I am a software developer based in the UK for a company that designs and builds financial and commodities trading software.</p>
              <br/>
              <p>I primarily work in an MSSQL -> .Net (C# | WPF) tech stack; but recently have found myself venturing more and more into the world of web development and devOps, working in a 
              Linux -> Docker -> MySQL -> Python -> Node -> React tech stack, where I have created a number of <span className='transition-colors duration-300 ease-in-out underline cursor-pointer hover:text-teal-600' onClick={() => this.setState({Page: Page.Portfolio})}>internal tools</span> and hackathon projects.</p>
              <br/>
              <p>When I'm not coding for work, I'm generally looking after the little one. But after she goes to bed, I'm usually coding for fun (I have a life, really), gaming, playing D&D, DJ'ing, or something else geeky...</p>
              <br />              
            </div>            
            <div className='cursor-default'>
              <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
                <span className='transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4'>Skills</span>
                <ul>                
                  {LIST_OF_SKILLS.sort().map((skill: string) =>
                    <li className='ml-6 hover:text-teal-600' key={skill}>{skill}</li>
                  )}
                </ul>
              </div>  
              <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
                <ul>
                <span className='transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4'>Weapons of Choice</span>
                  {LIST_OF_TOOLS.sort().map((tool: string) =>
                    <li className='ml-6 hover:text-teal-600' key={tool}>{tool}</li>
                  )}
                </ul>
              </div>
            </div>      
          </div>
        </div>          
        {/* Portfolio page */}
        <div className={`${this.state.Page === Page.Portfolio ? '' : 'hidden'} container ml-2 md:mx-auto mt-10`}>          
          <div>
            <div className='mb-6'>              
              <div>
                <span onClick={() => this.slideElement('library')} className='md:text-2xl mb-8 cursor-pointer hover:text-teal-600 transition-colors ease-in-out duration-500'>Library</span>
              </div>
              <div id='library' className='slide-up'>                
                <span className='md:text-base text-xs'>
                  Developed with a MySQL + Node Express backend, and React (TypeScript) with Tailwind CSS on the front-end.
                  <br />The project was to develop an easily maintainable library where end-users could checkout or reserve books themselves without needing to bother admin staff.
                  <br />Functionality includes:
                  <li>Adding books</li>
                  <li>Removing books</li>
                  <li>Checking out books</li>
                  <li>Reserving books</li>
                  <li>Live updating for all connected browsers</li>
                  <li>Email notifications for checkouts, reservations, overdue books</li>
                  <li>Notifications within the browser for overdue books</li>
                </span>
                <iframe className='h-48 md:h-84 md:w-3/6'  title='Library Demo' src="https://www.youtube.com/embed/4fu9WvQOjGY" allow="accelerometer; fullscreen; encrypted-media;"></iframe>
              </div>
            </div>
            <div className='mb-6'>
              <div>
                <span onClick={() => this.slideElement('tagbot')} className='w-auto md:text-2xl mb-8 cursor-pointer hover:text-teal-600 transition-colors ease-in-out duration-500'>TagBot</span>
              </div>
              <div id='tagbot' className='slide-up'>                
                <span className='md:text-base text-xs'>
                  This project was developed using Docker running multiple Linux containers to host MySQL, Python with Flask, and NGINX.
                  <br />The front-end was React with TypeScript.
                  <br />The goal of the project was to create the ability to create and manage custom tag groups that could be ultilised within Google Chat. 
                  <br />Functionality includes:
                  <li>Adding TagBot to any room</li>
                  <li>Searching for pre-existing tag groups per room</li>
                  <li>A web interface to create, delete and manage custom tag groups</li>
                </span>
                <a href={'images/tagbot2.png'} target='_blank' rel="noopener noreferrer">
                  <img 
                    src={'images/tagbot2.png'} 
                    height='60%'
                    width='60%'
                    alt='TagBot Screenshot'
                    className={`${this.state.ThemeSwitch === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} border-gray-300 border-solid border-2 rounded-md md:border-4`} />
                  </a>
              </div>
            </div>
            <div className='mb-6'>
              <span className='w-auto md:text-1xl text-xs mb-8'>More on the way...</span>
           </div>
          </div>         
        </div>
        {/* Contact page */}
        <div className={`${this.state.Page === Page.Contact ? '' : 'hidden'} container md:mx-auto mt-10 ml-2`}>          
          <div>
            <img 
              src={'images/mo-dj.jpg'} 
              alt='Mo Jiwa DJ'
              className={`${this.state.ThemeSwitch === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} ml-1/4 md:ml-0 mt-4 w-3/6 sm:w-64 sm:h-auto border-gray-300 border-solid border-2 rounded-md md:border-4 my-image`} />
          </div>    
          <div className=''>              
            <div>          
              <div className='md:flex md:text-2xl text-xl mt-4 mb-2'>
                Business(ish)
              </div>
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg> 
                </a>              
                <span className='ml-2 social-media-text'>GitHub: mojiwa</span>              
              </div>
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/timetraveller_x'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>    
                  </svg> 
                </a>              
                <span className='ml-2 social-media-text'>Twitter: timetraveller_x</span>              
              </div>    
              <div className='flex items-center ml-2 mb-8 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://instagram.com/mojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>            
                </a>
                <span className='ml-2 social-media-text'>Instagram: mojiwa</span>            
              </div>                                    
              <div className='lg:text-2xl text-xl mb-2'>
                Side hustle
              </div>
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://instagram.com/djmojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>            
                </a>
                <span className='ml-2 social-media-text'>Instagram: djmojiwa</span>            
              </div>    
              <div className='flex items-center ml-2 mb-8 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://facebook.com/djmojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                  </svg>            
                </a>
                <span className='ml-2 social-media-text'>Facebook: djmojiwa</span>            
              </div>   
              <div className='lg:text-2xl text-xl mb-2'>
                Play
              </div>
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/user/mojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <span className='ml-2 social-media-text'>Spotify: mojiwa</span>            
              </div>  
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://steamcommunity.com/id/mojiwa/'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                  </svg>            
                </a>
                <span className='ml-2 social-media-text'>Steam: mojiwa</span>            
              </div>   
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.gog.com/u/mojiwa'>
                  <svg               
                    className='social-media-buttons'
                    viewBox="0 0 24 24">
                      <path d="M7.15 15.24H4.36a.4.4 0 0 0-.4.4v2c0 .21.18.4.4.4h2.8v1.32h-3.5c-.56 0-1.02-.46-1.02-1.03v-3.39c0-.56.46-1.02 1.03-1.02h3.48v1.32zM8.16 11.54c0 .58-.47 1.05-1.05 1.05H2.63v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4H4.39a.4.4 0 0 0-.41.4v2.02c0 .23.18.4.4.4H6v1.35H3.68c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04H7.1c.58 0 1.05.47 1.05 1.04v5.86zM21.36 19.36h-1.32v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.42c0-.56.46-1.02 1.03-1.02h5.61v5.44zM21.37 11.54c0 .58-.47 1.05-1.05 1.05h-4.48v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4h-2.03a.4.4 0 0 0-.4.4v2.02c0 .23.18.4.4.4h1.62v1.35H16.9c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04h3.43c.58 0 1.05.47 1.05 1.04v5.86zM13.72 4.64h-3.44c-.58 0-1.04.47-1.04 1.04v3.44c0 .58.46 1.04 1.04 1.04h3.44c.57 0 1.04-.46 1.04-1.04V5.68c0-.57-.47-1.04-1.04-1.04m-.3 1.75v2.02a.4.4 0 0 1-.4.4h-2.03a.4.4 0 0 1-.4-.4V6.4c0-.22.17-.4.4-.4H13c.23 0 .4.18.4.4zM12.63 13.92H9.24c-.57 0-1.03.46-1.03 1.02v3.39c0 .57.46 1.03 1.03 1.03h3.39c.57 0 1.03-.46 1.03-1.03v-3.39c0-.56-.46-1.02-1.03-1.02m-.3 1.72v2a.4.4 0 0 1-.4.4v-.01H9.94a.4.4 0 0 1-.4-.4v-1.99c0-.22.18-.4.4-.4h2c.22 0 .4.18.4.4zM23.49 1.1a1.74 1.74 0 0 0-1.24-.52H1.75A1.74 1.74 0 0 0 0 2.33v19.34a1.74 1.74 0 0 0 1.75 1.75h20.5A1.74 1.74 0 0 0 24 21.67V2.33c0-.48-.2-.92-.51-1.24m0 20.58a1.23 1.23 0 0 1-1.24 1.24H1.75A1.23 1.23 0 0 1 .5 21.67V2.33a1.23 1.23 0 0 1 1.24-1.24h20.5a1.24 1.24 0 0 1 1.24 1.24v19.34z"/>
                  </svg>            
                </a>
                <span className='ml-2 social-media-text'>GOG: mojiwa</span>            
              </div>   
              <div className='flex items-center ml-2 mb-4 slide-right'>
                <svg               
                  className='social-media-buttons'
                  viewBox="0 0 24 24">
                    <path d="M10.457 0c-.516.02-.859.314-1.053.523-.807.87-1.136 2.298-1.168 3.952-.304-.522-.72-1.061-1.199-1.198a.905.905 0 00-.172-.03c-.958-.138-1.768 1.393-1.66 3.812-1.8.064-3.33.268-4.363.525-.182.045-.312.1-.42.154-.075.035-.128.07-.18.104-.162.106-.234.199-.234.199.47-.177 2.358-.495 5.234-.387l-.004-.045h.006c.126 1.29.502 2.789 1.235 4.409v.003l-.024-.044c-.456.721-1.792 2.923-2.217 4.58-.277 1.081-.202 1.772.014 2.218.262.59.764.776 1.08.848 1.173.268 2.6-.176 4.068-.998-.316.537-.603 1.204-.476 1.709a.881.881 0 00.058.162c.363.897 2.091.832 4.131-.47.948 1.51 1.882 2.72 2.616 3.48.13.136.243.223.345.289.277.195.467.205.467.205-.387-.316-1.598-1.78-2.934-4.303l-.035.028c0-.002-.003-.005-.004-.006 1.064-.76 2.186-1.847 3.23-3.31h.003l-.028.038-.002.004c.896.034 3.41.08 5.03-.373 1.07-.299 1.63-.706 1.91-1.115.383-.523.293-1.054.197-1.365-.354-1.15-1.448-2.16-2.892-3.022.622.005 1.342-.08 1.714-.441a.884.884 0 00.116-.139c.587-.764-.335-2.227-2.479-3.34.834-1.576 1.417-2.989 1.71-4.004.05-.179.067-.319.073-.44.032-.339-.054-.509-.054-.509-.08.493-.743 2.271-2.26 4.69l.041.02-.002.003c-1.19-.54-2.693-.968-4.482-1.14l-.002-.003.05.004c-.418-.793-1.633-2.992-2.834-4.168-.792-.775-1.426-1.058-1.92-1.097a1.532 1.532 0 00-.23-.012zm1.172 2.643c.461.008.936.364 1.328.738.491.47 1.111 1.374 1.412 1.83-.083-.003-.161-.014-.246-.016-1.863-.047-3.216.366-4.195.98.06-1.543.419-2.8 1.238-3.374a.847.847 0 01.463-.158zM7.514 4.71c.03 0 .06.007.09.012.256.07.471.338.642.642.023.563.075 1.144.15 1.733a34.71 34.71 0 00-1.988-.06c.041-1.377.428-2.31 1.106-2.327zm5.478 1.21c.244-.007.494-.003.752.013 2.092.125 4.045.717 5.45 1.443-.33.486-.696.993-1.09 1.514-.601-1.09-1.467-1.74-1.868-1.91-.349-.15-.422-.14-.422-.14s.033-.01.57.413c.579.455 1.046 1.106 1.376 1.805a33.723 33.723 0 00-5.405-1.489 30.386 30.386 0 00-1.847-.283c-.002.011-.002.033-.004.045l-.025-.004c-.016.111-.036.277-.05.46-.014.2-.02.358-.023.452.157.03.316.058.475.09 2.275.45 5.224 1.381 7.363 2.596.034 1.103-.325 2.417-1.19 3.726-1.154 1.75-2.644 3.147-3.976 4a35.941 35.941 0 01-.767-1.705c1.266.037 2.282-.395 2.634-.66.3-.224.33-.294.33-.297-.001.004-.03.044-.64.287-.696.278-1.51.356-2.293.285a33.748 33.748 0 003.988-3.931c.408-.478.797-.967 1.168-1.46l-.035-.025.016-.019a7.198 7.198 0 00-.754-.518l-.315.366c-1.522 1.74-3.794 3.819-5.91 5.066-.964-.525-1.913-1.49-2.61-2.88-.936-1.874-1.4-3.863-1.474-5.442.573.042 1.183.106 1.816.185-.644 1.066-.775 2.144-.722 2.576.045.372.09.43.092.432-.002-.002-.022-.046.072-.697.105-.728.432-1.46.873-2.094a33.707 33.707 0 001.414 5.422c.21.593.437 1.173.678 1.74l.039-.015.011.023c.105-.042.258-.107.422-.187.181-.088.32-.162.403-.208-.054-.15-.108-.303-.16-.457-.748-2.194-1.414-5.212-1.432-7.671.784-.486 1.833-.808 3.07-.846zm6.793 1.788c1.172.724 1.788 1.526 1.465 2.121-.182.264-.605.323-1.025.307a20.285 20.285 0 00-1.504-.7c.383-.582.738-1.162 1.064-1.728zm-1.033 3.518c1.307.823 2.215 1.76 2.303 2.757a.85.85 0 01-.096.485.987.987 0 01-.11.154c-.273.303-.743.49-1.19.621-.653.19-1.746.277-2.292.31.045-.07.09-.132.135-.204.973-1.59 1.293-2.968 1.25-4.123zM6.93 12.936c.046.088.084.173.133.261.883 1.626 1.907 2.59 2.921 3.133-1.374.727-2.647 1.051-3.558.627a.852.852 0 01-.453-.5c-.123-.388-.052-.888.058-1.34.166-.68.662-1.71.899-2.181zm4.6 4.273c.313.625.637 1.223.964 1.789-1.212.652-2.212.785-2.566.207-.017-.027-.026-.059-.037-.088-.075-.28.08-.633.283-.955.453-.29.907-.611 1.355-.953Z"/>
                </svg>                          
                <span className='ml-2 social-media-text'>BattleTag: MoJiwa#1643</span>            
              </div>     
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
