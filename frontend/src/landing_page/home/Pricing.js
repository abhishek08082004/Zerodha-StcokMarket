import React from 'react';

function Pricing() {
    return ( 
         <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-4'>
                <h1 className='mb-4 fs-3'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=''  style={{textDecoration:"none"}}> See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>



                </div>
                 <div className='col-2'></div>
                  <div className='col-6 mb-5'>

                    <div className='row'>
                        <div className='col border p-4 text-center'>
                           <h1 className='mb-2'>₹0</h1>
                           <p>Free equity delivery <br/>and direct
                             mutual funds</p>

                        </div>
                        <div className='col border p-4 text-center '>
                            <h1 className='mb-2'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                  </div>
            </div>
         </div>
     );
}

export default Pricing;