

// ESSE COMPONENTE SERVE PARA CRIAR UM ELEMENTO DE TEXTO QUE PODE SER ALTERADO DINAMICAMENTE PELO USUÁRIO EM UM ARQUIVO JSX

import React, { useState } from 'react';

export default function NomeUsuario () {

    const [MeuNome, setMeuNome] = useState("Fernanda Silva");

    const handleChange = (event) => {
        setMeuNome(event.target.value);
}

return (

    <MeuNome>
        <input 
        type="text" 
        value={MeuNome} 
        onChange={handleChange} 
        placeholder="Digite seu nome:"
        />
        <h1>{MeuNome}</h1>
    </MeuNome>

);
}


// É PRECISO (OU NÃO) USAR O CÓDIGO ABAIXO EM ALGUM LUGAR QUE NÃO ME LEMBRO NO MOMENTO:
// ReactDOM.render(<App />, document.getElementById('root'));