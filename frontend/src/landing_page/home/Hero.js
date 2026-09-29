import React from 'react';

function Hero() {
    return ( 
        
             <div className='container p-5 mb-5 mt-5'>
                <div className='row text-center'>
                    
                    <img src='/Images/homeHero.png'  alt='Hero Image' className='mb-5'/>

                     <h1 className='mt-5 mb-4' >Invest in everything</h1> 
                      <p className='mb-4'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>

                      <button className=' btn btn-primary p-2 fs-5 fw-semibold mb-3' style={{width: '18%' , margin: '0 auto' , textAlign: 'center' }}>Sign up for free</button>
                </div>
             </div>




     );
}

export default Hero;