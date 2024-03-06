import React from 'react'
import OnSaleProducts from './OnSaleProducts'


function MainContent({states,callbacks}) {
  return (
    <div className='section-main-content'>
      <OnSaleProducts states={states} callbacks={callbacks}/>
      {/* <EsteSeBorra states={states} callbacks={()=>{callbacks.setMessageIcon(prev=>{return({...prev,["isUser"]:true})})}}/>  */}
    </div>
    
  )
}

export default MainContent