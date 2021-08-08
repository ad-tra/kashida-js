import React, {useState} from 'react'

export default function Scanner({magnitude, contrast}) {
    console.log("magnitude: \t"+ magnitude + '\t\t contrast' + contrast)
    
    const kashida = (nudeText, insertionFreq = 3, insertionContrast = 0.8) => { 
        remove(nudeText)
        let insertionOccurrences;
        let insertionOccurrencesArr;
        let insertionCounter = -1;
        const re = /(?<=[يئهشسقفغعـضصنمكظطخحجثتب])(?=[يئهشسقفغعضصنمكظطخوـحجثتبلدرا])/gm
    
        return nudeText.replace(/[\u0600-\u06FF]+/gm, arabicWord =>{
            
            if(arabicWord.length < 2)	return arabicWord;
            
            insertionOccurrencesArr = arabicWord.match(re);
            if(insertionOccurrencesArr === null) return arabicWord;
            insertionOccurrences = insertionOccurrencesArr.length
    
            insertionOccurrences = Math.ceil(insertionOccurrences * insertionContrast)
            insertionCounter = 0
    
            return arabicWord.replace(re, ()=>{
                insertionCounter++;	
                return insertionCounter <= insertionOccurrences ? "ـ".repeat(insertionFreq) : ''
            })
        })
    }
    
    
    const remove = kashidaText => (
        kashidaText.replace(/ـ/gm, '')
    )
    const text = "نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرق"
    const kashidaText = kashida(text,magnitude, contrast)

    const [value, setValue] = useState(null)
    const handleTextArea = newValue =>{

        setValue(()=>(
            kashida(newValue.target.value, magnitude, contrast)
        ))
    }
    return (
        <textarea 
            name="scanner" 
            spellCheck= "false" 
            data-gramm_editor="false"
            dir = "rtl" 
            value = {value}
            onChange = {handleTextArea}
            placeholder = {kashidaText}>
        </textarea>
    )
}
