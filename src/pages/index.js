import React, {useState, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion'

import Layout from '../components/Layout';
import ControllersGroup from '../components/ControllersGroup'
import Scanner from '../components/Scanner'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'


export default function Index({location}) {
  const [kashidaParams, setKashidaParams] = useState([4,0.5])
  const [fontSize, setFontSize] = useState("3em")
  const [fontFamily, setFontFamily] = useState("Segoe UI")
  const [eventMessage, setEventMessage] = useState({label:"",styles:{}})


  const handleContrast = contrastSliderValue => {
    setKashidaParams([kashidaParams[0], contrastSliderValue])
  }
  const handleMagnitude = MagnitudeSliderValue => {
    setKashidaParams([MagnitudeSliderValue, kashidaParams[1]])
  } 
  

  const handleCopy = ()=>{
    document.querySelector('textarea[name="scanner"]').select()
    document.execCommand('copy')
    const copyText = window.getSelection().toString();
    window.getSelection().removeAllRanges();

    setEventMessage((oldState)=>{
      if(eventMessage.label.includes('Text Copied'))return oldState; 
      if(copyText === "")  return {label:'Type a word or two before copying', styles: {color:"#1e1ece"}}
      return {label:'Text Copied Successfully. مَبرُوك', styles: {color:"green"}}
    })
    setTimeout(()=>{
      setEventMessage(({label:'', styles: {}}))
    },4000)
  }
  return (
    <Layout>
      <div className="text_tooling" >
     
        
        <div className="controllers_group_container"> 
            <button className = "button-copy" onClick={handleCopy}>Copy</button>
            <ControllersGroup label = "text">
              <Dropdown onChange={(option) => {setFontFamily(option.value)}}/>
              <Slider label= "size" onChange = {(newFontSize)=>setFontSize(`${newFontSize}em`)} min = {2} max= {5} step={0.5} defaultValue = {fontSize.match(/\d*/)[0]}/>
            </ControllersGroup>  
        </div>
            

        <div className="scanner_container">
            <Scanner
              magnitude = {kashidaParams[0]} 
              contrast = {kashidaParams[1]}
              fontSize={fontSize}
              fontFamily = {fontFamily}
              />
        </div>


        <div className="controllers_group_container">
            <ControllersGroup label = "kashida">
              <Slider label = "magnitude" onChange = {handleMagnitude} min = {0} max = {20} defaultValue = {kashidaParams[0]}/>
              <Slider label = "contrast"  onChange = {handleContrast} min = {0} max = {1} step = {0.1} defaultValue = {kashidaParams[1]}/>  
            </ControllersGroup>  

            <ControllersGroup label = "presets" direction = "rtl">

              <button onClick={ ()=>setKashidaParams([4, 0.6])}>حكيم</button>
              <button onClick={ ()=>setKashidaParams([10, 1])}>حـــــــكيم</button>
              <button onClick={ ()=>setKashidaParams([10, 0.1])}>حـــكـــيـــم</button>

            </ControllersGroup>  
        </div>


        <AnimatePresence>
        {eventMessage.label !== "" && (
          <motion.p 
            className= "event-message" 
            initial = {{opacity: 0, top:'-1.2em'}}
            animate= {{opacity: 1, top:'-1.5em'}}  
            exit= {{opacity:0, top: '-1.4em'}}
            style={eventMessage.styles} >
            {eventMessage.label}
          </motion.p>
        )}
      </AnimatePresence>
      </div>
    </Layout>  
  )
}
