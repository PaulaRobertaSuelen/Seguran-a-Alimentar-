

// ESSE COMPONENTE SERVE PARA CRIAR UM ELEMENTO DE TEXTO QUE PODE SER ALTERADO DINAMICAMENTE PELO USUÁRIO EM UM ARQUIVO JSX

import React, { useState } from 'react';

export default function NumeroCelular () {

        const [MeuCelular, setMeuCelular] = useState("(81) 9 0000-0000");

        const handleChange = (event) => {
            setMeuCelular(event.target.value);
    }

    return (

        <NumeroTelefone>
            <input 
            type="text" 
            value={MeuCelular} 
            onChange={handleChange} 
            placeholder="Digite seu número de celular:"
            />
            <h1>{MeuCelular}</h1>
        </NumeroTelefone>

    );
}


// É PRECISO (OU NÃO) USAR O CÓDIGO ABAIXO EM ALGUM LUGAR QUE NÃO ME LEMBRO NO MOMENTO:
// ReactDOM.render(<App />, document.getElementById('root'));