import React from 'react';


function LeftSection({imageUrl , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
          <div className='container'>
               <div className='row'>
                    <div className='col-6 p-5'>

                         <img src={imageUrl}/>
                    </div>
                    <div className='col-6 p-5 mt-5'>
                         <h2 style={{fontSize:'1.5rem', lineHeight:'1.5'}} >{productName}</h2>
                         <p style={{fontSize:'1rem', lineHeight:'1.8', marginBottom:'15px'}}>{productDescription}</p>
                          <div  >
                              <a href={tryDemo} className='try'>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                         <a href={learnMore}className='learn' > Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </div>
                         <div className="mt-3">
                              <a href={googlePlay} > <img src="/images/googlePlayBadge.svg"/></a>
                         <a href={appStore}> <img src="/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                         </div>
                         
                    </div>
               </div>
          </div>
       
     );
}

export default LeftSection;