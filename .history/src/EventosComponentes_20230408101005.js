import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e,nombre) =>{
        alert("Hola!! Me has dado click"+ nombre)
    }

    const handleDobleClick = (e,nombre) =>{
        alert("Has dado doble click" + nombre)
    }

  return (
    <div>
        <h1>Hola!! Soy los eventos en react</h1>
        
        <p>
            {/*Evento click*/}
            <button  onClick={e => handleButtonEnviar(e,"Damian")} >Enviar</button>
        </p>
       

        <p>
            {/*Evento doble click*/}
            <button  onDoubleClick={e => handleDobleClick(e,"Damian")} >Enviar</button>
        </p>

        <p>
            {/*Evento onMouseEnter - onMouseLeave*/}

        </p>
        

    </div>
  )
}
