import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)
    function incrementarContador() {
        setContador(contador + 1)
    }
    function decrementarContador() {
        setContador(contador - 1)
    }


  return (
    <div>
        <h1>Contador Com useState</h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <h1>O contador estar em: {contador} </h1>
        <button onClick={decrementarContador}>Decrementar contador</button>
    </div>
  )
}

export default HookContador