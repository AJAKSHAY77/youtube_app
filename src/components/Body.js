import React from 'react'
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';

// main body aap
const Body = () => {
  return (
    <div className='flex'>
          
          <Sidebar />
          <Maincontainer/>
    </div>
  );
}

export default Body