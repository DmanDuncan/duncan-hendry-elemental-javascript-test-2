import React from "react"; 
import { useState } from "react";
import '../styles/nav.scss';

const Nav = ({setOnHomePage}) =>  { 

    // load home page content
    const openHomePage = () => {
        setOnHomePage(true);
    }
    
    // load contact page content
    const openContactPage = () => {
        setOnHomePage(false);
    }

    return (
        <main className="nav-container">
            <div className="nav-item-container">
                <div className="nav-item" onClick={openHomePage}> 
                    Home
                </div>
                <div className="nav-item" onClick={openContactPage}>
                    Contact
                </div>
            </div>
        </main>
    );
}

export default Nav;
 