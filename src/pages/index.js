import React, {useState, useRef} from 'react';

import Layout from '../components/Layout';
import ControllersGroup from '../components/ControllersGroup'
import Scanner from '../components/Scanner'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'


export default function Index({location}) {
  const [kashidaParams, setKashidaParams] = useState([4,0.5])
  const [fontSize, setFontSize] = useState("4em")
  const [fontFamily, setFontFamily] = useState("inherit")
  const [eventMessage, setEventMessage] = useState({label:"",styles:{}})


  const handleContrast = contrastSliderValue => {
    setKashidaParams([kashidaParams[0], contrastSliderValue])
  }
  const handleMagnitude = MagnitudeSliderValue => {
    setKashidaParams([MagnitudeSliderValue, kashidaParams[1]])
  } 
  let copyClickCount = 0;
  const handleCopy = ()=>{
    document.querySelector('textarea[name="scanner"]').select()
    document.execCommand('copy')
    window.getSelection().removeAllRanges();
    setEventMessage({label:'Text Coppiced Successfully', styles: {color:"green"}})
    copyClickCount++;
    setTimeout(()=>{
      copyClickCount--;
      setEventMessage((oldMessage)=>{
        if(copyClickCount==0) return {label:'', styles: {}}
        return oldMessage
      })
    },3000)
  }
  return (
    <Layout>
      <div className="text_tooling" >
      {eventMessage.label !== "" && 
      <p className= "event-message" style={eventMessage.styles}>{eventMessage.label}</p>}
        
        <div className="controllers_group_container"> 
            <button onClick={handleCopy}>Copy</button>
            <ControllersGroup label = "text">
              <Dropdown onChange={(option) => {setFontFamily(option.value)}}/>
              <Slider label= "size" onChange = {(newFontSize)=>setFontSize(`${newFontSize}em`)} min = {2} max= {5} step={0.5} defaultValue = {4}/>
            </ControllersGroup>  
        </div>
            

        <div className="scanner_container">
            <Scanner
              magnitude = {kashidaParams[0]} 
              contrast = {kashidaParams[1]}
              fontSize={fontSize}
              fontFamily = {fontFamily}
              customPlaceholder= {location.search === "" ? undefined : location.search.match(/(\?|\&)(customPlaceholder)\=([^&]+)/)[3]}/>
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



      </div>
    </Layout>  
  )
}
