
// ESSE COMPONENTE SERVE PARA CRIAR UM ELEMENTO DE TEXTO QUE PODE SER ALTERADO DINAMICAMENTE PELO USUÁRIO EM UM ARQUIVO JSX

import React, { useState } from 'react';

export default function Especialidade () {

    const [Funcao, setFuncao] = useState("Fernanda Silva");

    const handleChange = (event) => {
        setFuncao(event.target.value);
}

return (

    <Funcao>
        <input 
        type="text" 
        value={Funcao} 
        onChange={handleChange} 
        placeholder="Digite seu nome:"
        />
        <h1>{Funcao}</h1>
    </Funcao>

);
}


// É PRECISO (OU NÃO, NÃO ME LEMBRO) USAR O CÓDIGO ABAIXO EM ALGUM LUGAR QUE NÃO ME LEMBRO NO MOMENTO:
// ReactDOM.render(<App />, document.getElementById('root'));