import React from 'react';

import { Theme, Page } from './enums';

interface IPortfolioProps {
    Theme: Theme;
    SetPage: Function;
}

export default class Portfolio extends React.PureComponent<IPortfolioProps, {}> {
  componentDidMount = () => { 
    this.props.SetPage(Page.Portfolio);
  }
  
  componentDidUpdate = () => {
    this.props.SetPage(Page.Portfolio);
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
    return(
      <div className='md:w-10/12 md:mx-auto'>
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
                className={`${this.props.Theme === Theme.Dark ? 'border-gray-300' : 'border-gray-900'} border-gray-300 border-solid border-2 rounded-md md:border-4`} />
            </a>
          </div>
        </div>
        <div className='mb-6'>
          <span className='w-auto md:text-1xl text-xs mb-8'>More on the way...</span>
        </div>
      </div>         
    );
  }
}