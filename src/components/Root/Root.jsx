import React from 'react';
import NavBar from '../NavBer/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;