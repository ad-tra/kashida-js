import React, {useState} from 'react';

import Layout from '../components/Layout';
import ControllersGroup from '../components/ControllersGroup'
import Scanner from '../components/Scanner'
import Slider from '../components/Slider'
import Dropdown from '../components/Dropdown'


export default function Index() {
  const [kashidaParams, setKashidaParams] = useState([0,0.5])
  const handleContrast = contrastSliderValue => {
    setKashidaParams([kashidaParams[0], contrastSliderValue])
  }
  const handleMagnitude = MagnitudeSliderValue => {
    setKashidaParams([MagnitudeSliderValue, kashidaParams[1]])
  } 

  return (
    <Layout>
      <div className="text_tooling">
        
        
        <div className="controllers_group_container"> 
            <button>Copy</button>
            <ControllersGroup label = "text">
              <Dropdown />
              <Slider label= "size" />
            </ControllersGroup>  
        </div>
            

        <div className="scanner_container">
            <Scanner magnitude = {kashidaParams[0]} contrast = {kashidaParams[1]}/>
        </div>


        <div className="controllers_group_container">
            <ControllersGroup label = "kashida">
              <Slider label = "magnitude" onChange = {handleMagnitude} min = {0} max = {20} defaultValue = {kashidaParams[0]}/>
              <Slider label = "contrast"  onChange = {handleContrast} min = {0} max = {1} step = {0.1} defaultValue = {kashidaParams[1]}/>  
            </ControllersGroup>  

            <ControllersGroup label = "presets" direction = "rtl">

              <button>حكيم</button>
              <button>حـــــــكيم</button>
              <button>حـــكـــيـــم</button>

            </ControllersGroup>  
        </div>



      </div>
    </Layout>  
  )
}
