import React, { useState } from 'react'
import './accordionwrapper.css'

const AccordionWrapper = (props) => {

  const [selected, setSelect] = useState(false);

  if (selected === false) {
    return(
      <div className="accordionwrapper">
        <div className="accordionheader" onClick={() => setSelect(true)}>
          <span>{props.containerName}</span>
          <span>+</span>
        </div>
      </div>
    )
  }

  if (selected === true) {
    return(
      <div className="accordionwrapper">
        <div className="accordionheader" onClick={() => setSelect(false)}>
          <span>{props.containerName}</span>
          <span>-</span>
        </div>
        <div className="accordionbody">
          <p>
            {props.accordionBody}
          </p>
        </div>
      </div>
    )
  }
}

export default AccordionWrapper