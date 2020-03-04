import React from 'react'
import './selectarrow.css'

const SelectArrow = ({onClick, direction}) => {
    return(
        <div className="selectarrow" onClick={onClick}>{direction}</div>
    )
}

export default SelectArrow