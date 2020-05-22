import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'

import { Filter } from './enums';

function App() {
  const [themeSwitch, setThemeSwitch] = useState(Filter.Dark);

  return (
    <div className={`${themeSwitch === Filter.Dark ? 'bg-gray-800 text-gray-300' : 'bg-gray-300 text-gray-800'} h-screen`}>      
      <div className='right-0 fixed'>
        <Button.Group>
          <Button
            color="grey"       
            active={themeSwitch === Filter.Light}     
            disabled={themeSwitch === Filter.Light}            
            size='tiny'
            compact            
            onClick={() => setThemeSwitch(Filter.Light)}
            >
            Light
          </Button>
          <Button.Or />
          <Button 
            color='black'            
            active={themeSwitch === Filter.Dark}
            disabled={themeSwitch === Filter.Dark}
            size='tiny'            
            compact
            onClick={() => setThemeSwitch(Filter.Dark)}
            >
              Dark
            </Button>
        </Button.Group>
      </div>
      <div className='mx-auto text-6xl center-content text-center'>
        Mo Jiwa
      </div>
    </div>
  );
}

export default App;
