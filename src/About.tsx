import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, Page } from './enums';

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

interface IAboutProps {
    Theme: Theme;
    SetPage: Function;
}

export default class About extends React.PureComponent<IAboutProps, {}> {
  componentDidUpdate = () => {
    this.props.SetPage(Page.About);
  }

  render() {
    return(
      <div className=''>
        <div className='flex-row'>
          <Link to='/contact'>
            <img 
              src={'images/mo-jedi.jpg'} 
              alt='Mo Jiwa'              
              className={`${this.props.Theme === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} mt-4 w-3/6 sm:w-64 sm:h-auto sm:ml-2 ml-1/4 border-gray-300 border-solid border-2 rounded-md md:border-4 my-image cursor-pointer`}
              onClick={() => this.props.SetPage(Page.Contact)}/>   
          </Link>         
          <div className='text-xs mt-4 md:text-base ml-2'>
            <p>I am a software developer based in the UK for a company that designs and builds financial and commodities trading software.</p>
            <br/>
            <p>I primarily work in an MSSQL {'->'} .Net (C# | WPF) tech stack; but recently have found myself venturing more and more into the world of web development and devOps, working in a 
            Linux {'->'} Docker {'->'} MySQL {'->'} Python {'->'} Node {'->'} React tech stack, where I have created a number of <Link to='/portfolio'><span className='transition-colors duration-300 ease-in-out underline cursor-pointer hover:text-teal-600' onClick={() => this.props.SetPage(Page.Portfolio)}>internal tools</span></Link> and hackathon projects.</p>
            <br/>
            <p>When I'm not coding for work, I'm generally looking after the little one. But after she goes to bed, I'm usually coding for fun (I have a life, really), gaming, playing D&D, DJ'ing, or something else geeky...</p>
            <br />              
          </div>            
          <div>
            <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
              <label className='transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4'>Skills</label>
              <ul>                
                {LIST_OF_SKILLS.sort().map((skill: string) =>
                  <li className='ml-6' key={skill}><label>{skill}</label></li>
                )}
              </ul>
            </div>  
            <div className='animated-list mt-4 ml-2 border-teal-600 border-l-4'>
              <label className='transition-colors duration-300 hover:text-teal-600 text-base md:text-xl ml-4'>Weapons of Choice</label>
              <ul>
                {LIST_OF_TOOLS.sort().map((tool: string) =>
                  <li className='ml-6' key={tool}><label>{tool}</label></li>
                )}
              </ul>
            </div>
          </div>      
        </div>
      </div>          
    );
  }
}