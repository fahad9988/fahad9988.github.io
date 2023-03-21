import React from 'react';

const AppWrap = ( Component,idName,classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} >
      <Component/>
    </div>
  )
}

export default AppWrap