import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e,nombre) =>{
        alert("Hola!! Me has dado click"+nombre)
    }
  return (
    <div>
        <h1>Hola!! Soy los eventos</h1>
        <button  onClick={e => handleButtonEnviar(e,"Damian")} >Enviar</button>
    </div>
  )
}
