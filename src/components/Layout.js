import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'

import Styles from '../styles/global.scss'



export default function Layout(props) {
    const [isDark, setIsDark] = useState(undefined)
    useEffect( ()=> {
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches  ? setIsDark(true) : setIsDark(false);
    }, [])

    const handleLights = ()=>{
        setIsDark( oldIsDark =>!oldIsDark )
    }
    return (
        <div className = {`layout ${isDark === undefined ? "" : isDark ? "dark" : "light"}`}>
            <div id="d_el1" aria-hidden="true"></div>
            <div id="d_el2" aria-hidden="true"></div>
            <nav>
                <ul>
                    <li><Link to="/about">What is KashidaJS</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <button onClick = {handleLights}>Lights</button>
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
