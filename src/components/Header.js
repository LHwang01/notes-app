import React from 'react'
import { useState } from 'react';

const Header = ({ handleToggleDarkMode }) => {
    const [mode, setMode] = useState(false);

    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick = {() => {handleToggleDarkMode((previousDarkMode) => !previousDarkMode); setMode(!mode)}}  className="save"> 
                {`${mode ? 'Light Mode' : 'Dark Mode'}`}
            </button>
        </div>
    )
}

export default Header;