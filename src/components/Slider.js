import React from 'react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css';


export default function Slider(props) {
    const {label, ...rest} = props
    
    return (
        <div className = "slider">
           <p className = "label">{label}</p>
           <RcSlider {...rest} />
        </div>
    )
}
