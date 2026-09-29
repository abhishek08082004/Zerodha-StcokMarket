import React from 'react';
import {Link} from "react-router-dom";

function Orders() {
    return ( 
        <div className='orders'>
            <div className='no-orders'>
                <p> You have not placed any Order Today </p>

                <Link to={"/"} className='btn'>
                  Get Started
                </Link>
            </div>
        </div>
     );
}

export default Orders;