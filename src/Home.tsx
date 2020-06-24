import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, Page } from './enums';

interface IHomeProps {
    Theme: Theme;
    SetPage: Function;
}

export default class Home extends React.PureComponent<IHomeProps, {}> {

    render() {
        return(
            <div id='home-page'>           
                <div className={`font-thin center-content text-center cursor-default`} >
                    <span className='text-xl md:text-5xl'>Hi, I'm <span className='font-normal text-teal-600'>Mo Jiwa</span>.</span>
                    <br />
                    <span className='text-lg md:text-3xl'>I'm a full-stack software developer</span>
                    <div>
                        <Link to='/about'>
                            <button      
                                onClick={() => this.props.SetPage(Page.About)}                 
                                onMouseOver={() => document.getElementById('see-more-svg')?.classList.add('rotate-svg')}     
                                onMouseLeave={() => document.getElementById('see-more-svg')?.classList.remove('rotate-svg')}  
                                className={`see-more-button mt-4 focus:outline-none font-thin text-md md:text-2xl rounded-lg pt-1 pb-1 pl-4 pr-4 hover:bg-teal-600 border-solid border-2 hover:text-gray-300 hover:border-teal-600 ${this.props.Theme === Theme.Dark ? 'text-gray-300 border-gray-300' : 'text-gray-900 border-gray-900'}`}>
                                    See More  <svg id='see-more-svg' className='inline transition-transform duration-300' height="20px" width="20px" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                            </button>
                        </Link>
                    </div>
                </div>          
            </div>
        );
    }
}