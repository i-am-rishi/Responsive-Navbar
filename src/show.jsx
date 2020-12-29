import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function Show(){
    return ( 
        <BrowserRouter>
        <NavBar/>
        </BrowserRouter>
    );
}

export default Show;