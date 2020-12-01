import React, { useState } from 'react';
import './style.css';

const NavBar = ({ tabs, setSelectedTab, selectedTab }) => {
    return (
        <div>
            { tabs.map( ( tab, index ) =>
                <button 
                    className = "tab"
                    key = { tab.title } 
                    active = { index === selectedTab ? 1 : 0 } //to check if this tab is the currently selected tab => for different styling
                    onClick = { () => setSelectedTab ( index ) }
                >
                    { tab.title } 
                </button>
            )}
        </div>
    )
}


export default NavBar;