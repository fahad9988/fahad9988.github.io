import React from 'react';
import "./GitHub.scss";
import Calender from '../../components/Calendar';
import Stats from '../../components/Stats';

const GitHub = () => {
  return (
    <div className='main' >
     <h1 className='git-head'>My Github Stats & Calendar</h1>
     <Stats/>
     <Calender/>
    </div>
  )
}

export default GitHub