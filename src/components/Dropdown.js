import React, {useEffect, useState}  from 'react'
import Select from 'react-select'

export default function Dropdown({onChange}) {
    const options = [
        { value: 'Segoe UI Regular, Arial', label: 'Segoe UI / سـاقـوا ' },
        { value: 'Arial', label: 'Arial / أريــــــــــــــال' },
        { value: 'Cairo, Arial', label: 'Cairo / القـــاهــرة' },
        { value: 'Amiri, Arial', label: 'Amiri / أمـــــــــــــيري' }

    ]
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        if(window.screen.width <900) setIsMobile(true)
    },[])
    const styles = {
        singleValue:(provided, {data})=>({
            ...provided,
            width: "119px !important",
            fontFamily: data.value
        }),
        control:(provided)=>({
            ...provided,
            border: "1px dashed #aaa7bb !important",
            borderRadius: 0,
            boxShadow: "none",

        }), 
        menu:(provided)=>({
            ...provided,
            borderRadius: 0,
            boxShadow: "none",
            border: "1px solid black"
        }),
        option: (provided,state)=>({
            ...provided,
            backgroundColor: "white !important",
            color:"#302f36",
            border: state.isSelected && "1px solid #302f36",
            borderLeft: "none",
            borderRight: "none",
            textDecoration: state.isFocused && "underline",
            fontFamily: state.value

        })
    }
    return (
        <Select
            options = {!isMobile ? options: options.map(({value, label}) =>( {value:value, label: label.replaceAll("ـ", "")} ))}
            styles = {styles}
            isSearchable= {false}
            defaultValue={ {value: "", label: 'Pick a Font'}}
            onChange = {onChange}
            menuPlacement= {isMobile ? "top" : "bottom"}
        />
    )
}
