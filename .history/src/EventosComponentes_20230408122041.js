import React from 'react'

export const EventosComponentes = () => {
    const handleButtonEnviar = (e,nombre) =>{
        alert("Hola!! Me has dado click"+ nombre)
    }

    const handleDobleClick = (e,nombre) =>{
        alert("Has dado doble click" + nombre)
    }


    const handleHasEntrado = (e,accion) =>{
        
        console.log(`Has ${accion} entrado a la caja`)
    }

    const handleEstasAdentro = e =>{
        console.log("Estas adentro del input, introduce tu nombre!!!")
    }

    const handleEstasAfuera = e =>{
        console.log("Estas afuera del input, Adios!!!")
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

        <p>
            {/*Eventos onFocus - onBlur*/}
            <input type="text" onFocus={handleEstasAdentro}
                                onBlur={handleEstasAfuera}
                                placeholder='Introduce tu nombre....'
            />

        </p>
        

    </div>
  )
}
