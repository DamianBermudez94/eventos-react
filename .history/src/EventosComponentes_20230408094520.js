import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e) =>{
        alert("Hola!! Me has dado click")
    }
  return (
    <div>
        <h1>Hola!! Soy los eventos</h1>
        <button  onClick={handleButtonEnviar} >Enviar</button>
    </div>
  )
}
