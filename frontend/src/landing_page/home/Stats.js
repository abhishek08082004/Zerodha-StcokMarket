import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3 '>
         <div className='row p-4'>
            <div className='col-6 p-4'>

             <h2 className='fs-3  mb-5' style={{opacity:"0.9" }}>Trust with confidence</h2>

             <h2 className='fs-4'>Customer-first always</h2>
             <p className='text-muted pb-3'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
              
            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted pb-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>


            <h2 className='fs-4'>The Zerodha universe</h2>
             <p className='text-muted pb-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

             <h2 className='fs-4'>Do better with money</h2>
             <p className='text-muted pb-3'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>



            </div>
            <div className='col-6 p-5 '>

              <img src='/Images/ecosystem.png' style={{width: "97%"}} />

              <div className='text-center '>
                <a href='' className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href=''  style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>

            </div>

         </div>


        </div>
     );
}

export default Stats;