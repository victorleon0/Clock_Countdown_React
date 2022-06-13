import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState("");  //vamos a usar useState para definir el tiempo dentro de la constante time
  useEffect(() => {  //Vamos a usar useEffect para que la variable countDownDate nos recoja el valor del tiempo en milisegundos de un string como "Jan 1, 2020 00:00:00".
      let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
      let x = setInterval(() => {
        let now = new Date().getTime(); 
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s "); 
          
          if (distance < 0) {
            clearInterval(x);
            setTime("COUNTDOWN FINISHED"); 
          }
    }, 1000);
  }, []);
  return <div className="countdown">
        
      <h3 className="countdownMain">{time}</h3>
      <input className='dateUser' type='date' placeholder='Introduce tu fecha'></input>
  </div>;
};

export default Countdown;