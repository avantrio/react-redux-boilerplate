import React from 'react';

import NavBar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import SideBar from './SideBar';                        

const MasterLayout = (props) => {
    return (
        <>
        <NavBar/>
        <div class="container">
        <div class="columns">
            <div class="column is-3">
                <div style={{marginLeft:20, marginTop:20}}> < SideBar/> </div> 
            </div>
            <div class="column is-9">
                {/* <div style={{marginTop:60, marginLeft: 80}}>
                    <Breadcrumbs/>
                </div> */}
                {props.children}
            </div>
        </div>
        </div>
        </>
    )
}

export default MasterLayout;