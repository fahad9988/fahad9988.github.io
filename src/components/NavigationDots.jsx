import React from 'react'

const NavigationDots = ({active}) => {
  return (
<div className='app__navigation' >
{["Home","About","Skills","Projects","Contact"].map((item,index) => (
     <a 
     key={item+index}
     className="app__navigation-dot"
     href={`#${item}`}
     style={active===item? {backgroundColor:"black"}:{}}
     />
))} 
</div>
  )
}

export default NavigationDots