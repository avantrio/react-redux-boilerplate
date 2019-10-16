import React from 'react';

import NavBar from './Navbar';
import Breadcrumbs from './Breadcrumbs';                        

const MasterLayout = (props) => {
    return (
        <>
        <NavBar/>
        <div style={{marginTop:60, marginLeft: 80}}>
            <Breadcrumbs/>
        </div>
        </>
    )
}

export default MasterLayout;