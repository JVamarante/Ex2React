import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderizacao(oQueRenderizar) {
        if (oQueRenderizar === "h1") {
            return <h1>Teste de h1</h1>
        }
        else {
            return <h2>Teste de h2</h2>
        } 
    }




  return (
    <div>
        {escolhaDeRenderizacao("h2")}
        {escolhaDeRenderizacao("h1")} 
    </div>
  )
}

export default RenderizandoComFuncoes