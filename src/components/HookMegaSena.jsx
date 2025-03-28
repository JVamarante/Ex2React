import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()
    const [listaDeSorteados, setListaDeSorteados] = useState([])	

    function sortearNumero() {
        if(listaDeSorteados.length < 6) {
            let numeroSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado(numeroSorteado)
            setListaDeSorteados([...listaDeSorteados, numeroSorteado])
        }
        else { alert("Você já sorteou 6 números!") }
    }

  return (
    <div>
        <h1>Sorteador Da Mega em React</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Ultimo número sorteador: {sorteado} </h1>
        <h1>Sorteados: {listaDeSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena