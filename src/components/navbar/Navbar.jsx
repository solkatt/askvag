import React from 'react'
import './Navbar.css'

function Navbar(props) {

    return(
        <nav>
            <p style={{color: 'orange'}}>Navbar</p>
            <p style={{color: 'orange'}}>{props.test}</p>
        </nav>
    )
}


export default Navbar