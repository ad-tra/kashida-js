import React, {useState, useEffect} from 'react'
import kashida from "../utils/kashida/kashida"


export default function Scanner({magnitude, contrast, customPlaceholder, fontSize, fontFamily}) {
    console.log("magnitude: \t"+ magnitude + '\t\t contrast' + contrast)


    const text = customPlaceholder === undefined ?  "نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرق" : decodeURI(customPlaceholder)
    
    const kashidaText = kashida(text,magnitude, contrast)

    const [value, setValue] = useState("")
    const handleTextArea = newValue =>{
        console.log('user typed')
        setValue(()=>{
           console.log(kashida(newValue.target.value, magnitude, contrast))
            return newValue.target.value;
        })
    }
    useEffect(() => {
       customPlaceholder = new URL(window.location.href).searchParams.get("customPlaceHolder")  
        if(customPlaceholder !== null)
        document.querySelector('textarea').placeholder = kashida(customPlaceholder, 5, 0.5)     

    }, [])
    
    return (
        <textarea 
            name="scanner" 
            spellCheck= "false"
            autoFocus 
            data-gramm_editor="false"
            dir = "rtl" 
            value = {kashida(value, magnitude, contrast)}
            onChange = {handleTextArea}
            placeholder = {kashidaText }
            style = {{"fontSize": fontSize, "fontFamily": fontFamily}}
        />
        
    )
}
