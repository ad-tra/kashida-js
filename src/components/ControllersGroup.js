import React from 'react'

export default function ControllersGroup({label, children, direction}){
    return(
        <div className={`controllers_group ${direction}`}>
            <p className={`controllers_group_label ${direction}`}>{label}</p>
            <div className="controllers_group_input">
                {children}
            </div>
        </div>
    )
}