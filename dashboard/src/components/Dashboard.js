import React from 'react';
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import {GeneralContextProvider} from "./GeneralContext";
function Dashboard() {
    return ( 
        <div className='dashboard-container'>
            <GeneralContextProvider>
                 <WatchList/>
            </GeneralContextProvider>
            
            <div className='content'>
                <Routes>
                    <Route exact path='/' element={<Summary/>} />
                    <Route  path='/Orders' element={<Orders/>} />
                    <Route  path='/Holdings' element={<Holdings/>} />
                    <Route  path='/Positions' element={<Positions/>} />
                    <Route  path='/Funds' element={<Funds/>} />
                    <Route  path='/Apps' element={<Apps/>} />
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;