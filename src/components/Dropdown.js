import React from 'react'
import Select from 'react-select'
export default function Dropdown({onChange}) {
    const options = [
        { value: 'Segoe UI, Frutiger, Dejavu Sans, Helvetica Neue, Arial, sans-serif', label: 'Segoe UI' },
        { value: 'strawberry', label: 'Arial' },
        { value: 'Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif', label: 'Times New Roman' },
        { value: 'vanilla', label: 'Harrir' }

    ]
    const styles = {
        singleValue:(provided)=>({
            ...provided,
            width: "140px !important",
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


        })
    }
    return (
        <Select
            options = {options}
            styles = {styles}
            isSearchable= {false}
            defaultValue={ {value: 'vanilla', label: 'Harrir'}}
            onChange = {onChange}
        />
    )
}
