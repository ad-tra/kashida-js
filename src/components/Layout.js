import React from 'react'
import {Link} from 'gatsby'

import Styles from '../styles/global.scss'


export default function Layout(props) {
    return (
        <div className = "layout">
            <div id="d_el1" aria-hidden="true"></div>
            <div id="d_el2" aria-hidden="true"></div>
            <nav>
                <ul>
                    <li><Link to="/about">What is KashidaJS</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div id="d_el4" aria-hidden="true"></div>
            {props.children}

            
            <div id="d_el5" aria-hidden="true"></div>
            <div className = "maker_credits">
                <p>Made by
                    <a href = "https://adtra.me" target= "_blank" rel = "noreferrer" >Adam Trabelsi</a>
                </p>    
            </div>
            <div id="d_el7" aria-hidden="true"></div>
            <div id="d_el8" aria-hidden="true"></div>
        </div>
    )
}
