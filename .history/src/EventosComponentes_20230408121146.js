import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e,nombre) =>{
        alert("Hola!! Me has dado click"+ nombre)
    }

    const handleDobleClick = (e,nombre) =>{
        alert("Has dado doble click" + nombre)
    }


    const handleHasEntrado = (e,accion) =>{
        // eslint-disable-next-line no-template-curly-in-string
        console.log(`Has ${accion} entrado a la caja`)
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

        <div id="caja" onMouseEnter={e => handleHasEntrado (e,"entrado")}
                        onMouseLeave={e =>handleHasEntrado (e,"salido")} 
        >
            {/*Evento onMouseEnter - onMouseLeave*/}
            Has Entrado a la caja
        </div>
        

    </div>
  )
}
