import React from 'react'
import './accordionwrapper.css'

const AccordionWrapper = (props) => {
  return(
    <div className="accordionwrapper">
      <span>{props.containerName}</span>
      <span>+</span>
    </div>
  )
}

export default AccordionWrapper