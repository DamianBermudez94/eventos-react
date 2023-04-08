import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e,nombre) =>{
        alert("Hola!! Me has dado click"+ nombre)
    }

    const handleDobleClick = (e,nombre) =>{
        alert("Has dado doble click" + nombre)
    }


    const handleHasEntrado = (e,accion) =>{
        console.log("Has ${accion} dado doble click")
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

        <div id="caja">
            {/*Evento onMouseEnter - onMouseLeave*/}
            <button onMouseEnter={handleHasEntrado}>Has Entrado</button>
        </div>
        

    </div>
  )
}
