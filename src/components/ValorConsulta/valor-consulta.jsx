// ESSE COMPONENTE SERVE PARA CRIAR UM ELEMENTO DE TEXTO QUE PODE SER ALTERADO DINAMICAMENTE PELO USUÁRIO EM UM ARQUIVO JSX

import React, { useState } from 'react';

export default function ValorConsulta () {

    const [Valor, setValor] = useState("Fernanda Silva");

    const handleChange = (event) => {
        setValor(event.target.value);
}

return (

    <Valor>
        <input 
        type="text" 
        value={Valor} 
        onChange={handleChange} 
        placeholder="Digite o valor da consulta:"
        />
        <h1>{Valor}</h1>
    </Valor>

);
}


// É PRECISO (OU NÃO, NÃO ME LEMBRO) USAR O CÓDIGO ABAIXO EM ALGUM LUGAR QUE NÃO ME LEMBRO NO MOMENTO:
// ReactDOM.render(<App />, document.getElementById('root'));