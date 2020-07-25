import React from 'react';

import { Theme, Page } from './enums';

interface IPortfolioProps {
    Theme: Theme;
    SetPage: Function;
}

interface IPortfolioState {
  LibraryDown: boolean;
  TagBotDown: boolean;
}

export default class Portfolio extends React.PureComponent<IPortfolioProps, {}> {
  readonly state = {
    LibraryDown: false,
    TagBotDown: false,
  }

  componentDidMount = () => { 
    this.props.SetPage(Page.Portfolio);
  }
  
  componentDidUpdate = () => {
    this.props.SetPage(Page.Portfolio);
  }

  slideElement = (elementId: string) => {
    var element = document.getElementById(elementId);
    if (element?.classList.contains('slide-down')) {
      element?.classList.remove('slide-down');
      element?.classList.add('slide-up');
    } else {
      element?.classList.add('slide-down');
      element?.classList.remove('slide-up');
    }

    if (elementId === 'library') {
      this.setState({ LibraryDown: !this.state.LibraryDown });
    }
    if (elementId === 'tagbot') {
      this.setState({ TagBotDown: !this.state.TagBotDown });
    }
  }

  render() {
    return(
      <div className='mx-5 page-fade-in'>
        <div className='mb-6'>
          <div>
            <a href={'https://github.com/mojiwa/mojiwa.com'} target='_blank' rel="noopener noreferrer"><span onClick={() => this.slideElement('mojiwa')} className='w-auto md:text-2xl mb-8 cursor-pointer hover:text-teal-600 transition-colors ease-in-out duration-500'>mojiwa.com (opens on GitHub)</span></a>                    
          </div>
        </div>
        <div className='mb-6 mt-12'>
          <div className='flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500' onClick={() => this.slideElement('library')}>
            <span className='md:text-2xl mb-8'>Library</span>
            <svg className={`ml-2 ${this.state.LibraryDown ? 'hidden' : ''}`} fill="none" width="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 14 24 24" stroke="currentColor"><path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
            <svg className={`ml-2 ${this.state.LibraryDown ? '' : 'hidden'}`} fill="none" width="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 14 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
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
          <div className='flex hover:text-teal-600 cursor-pointer transition-colors ease-in-out duration-500' onClick={() => this.slideElement('tagbot')}>
              <span className='md:text-2xl mb-8'>TagBot</span>
              <svg className={`ml-2 ${this.state.TagBotDown ? 'hidden' : ''}`} fill="none" width="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 14 24 24" stroke="currentColor"><path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              <svg className={`ml-2 ${this.state.TagBotDown ? '' : 'hidden'}`} fill="none" width="24px" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 14 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
          </div>
          <div id='tagbot' className='slide-up'>                
            <span className='md:text-base text-xs'>
              This project was developed using Docker running multiple Linux containers to host MySQL, Python with Flask, and NGINX.
              <br />The front-end was created entirely using vanilla JS, html, and pure css.
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