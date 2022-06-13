import React from 'react'
import './DigitalClock.scss';

import { useState, useEffect } from "react";


const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
      setInterval(() => {
        const date = new Date();  //La constante date recoge la información de la hora local a través del método date.toLocaleTimeString()
        setClockState(date.toLocaleTimeString()); //el valor recogido será el que se aplique a clockState mediante setClockState cada 1000 milisegundos (un segundo).
      }, 1000);
    }, []);

  return (
    <div className="digitalClockContainer">
    <h2 className="digitalClock">{clockState}</h2>
    
    </div>
  )
}

export default DigitalClock