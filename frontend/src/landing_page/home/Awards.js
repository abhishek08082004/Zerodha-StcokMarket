import React from 'react';

  function Awards() {
    return ( 
          <div className='container '>
           <div className='row'>
             <div className='col-6 p-5'>

             <img src='/Images/largestBroker.svg'/>

             </div>
             <div className='col-6 p-5 mt-5'>

               <h1 className='fs-2 mb-3'>Largest stock broker in India</h1>
               <p className='mb-4'>2+ million Zerodha clients contributes to over 15% of all retails order volumes in india daily by trading and investing in:</p>
                <div className='row '>
                 <div className='col-6'>
                         <ul className='p-3'>
                          <li>Futures and Options</li>
                          <li>Commodity derivatives</li>
                          <li>Currency derivatives</li>
                         </ul>

                 </div>
                 <div className='col-6 '>
                      <ul className='p-3'>
                          <li>Stocks & IPOs</li>
                          <li>Direct mutual funds</li>
                          <li>Bonds and government </li>
                         </ul>

                 </div>
                   

                </div>
                   <img src='/Images/pressLogos.png' style={{width: "90%"}} className='mt-1' />
                  

             </div>
                 



           </div>
          </div>
     );
  }
  
  export default Awards;