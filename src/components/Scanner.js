import React, {useState, useEffect} from 'react'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/arabic';
import Draggable from 'react-draggable';



import kashida from "../utils/kashida/kashida"

export default function Scanner({magnitude, contrast,isKeyboardVisible, fontSize, fontFamily}) {

    const [virtualInput, setVirtualInput] = useState("")
    const [placeholder, setPlaceholder] = useState("")
    useEffect(() => {
        let customPlaceholder = new URLSearchParams(window.location.search).get("customPlaceholder")
        setPlaceholder(()=>{
            if(customPlaceholder !== null) 
            return  decodeURI(customPlaceholder)
            return  "هنا إكتب نصا حكيما";
        })
    }, [])
    
    const kashidaPlaceholder = kashida(placeholder,magnitude, contrast)

    const [value, setValue] = useState("")
    const handleTextArea = newValue =>{
        setValue(()=>newValue.target.value )
    }


    return (
        <>
         {isKeyboardVisible&& 
        <Draggable defaultPosition = {{x: 48, y: 10}} >
            <div className="box">
            <Keyboard  
                layout={layout.layout}
                onChange={input => {
                    setVirtualInput(input)
                    console.log(input)
                    console.log(input.length)
                    console.log(input.charAt(input.length - 2))
                    setValue(oldValue =>  oldValue + input.charAt(input.length -2))
                }}
                rtl
            />
            </div>
        </Draggable>}
        <textarea 
            name="scanner" 
            spellCheck= "false"
            autoFocus 
            data-gramm_editor="false"
            dir = "rtl" 
            value = {kashida(value, magnitude, contrast)}
            onChange = {handleTextArea}
            placeholder = {kashidaPlaceholder }
            style = {{"fontSize": fontSize, "fontFamily": fontFamily}}
        />
        </>
        
    )
}
