import React, { useState } from 'react';
import { Botao } from './styles'; // Importa o botão estilizado

const VerificadorSenha = () => {
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
        verificarSenha(event.target.value, confirmacaoSenha);
    };

    const handleConfirmacaoSenhaChange = (event) => {
        setConfirmacaoSenha(event.target.value);
        verificarSenha(senha, event.target.value);
    };

    const verificarSenha = (senha, confirmacaoSenha) => {
        if (senha.length < 8) {
            setMensagemErro('A senha deve ter pelo menos 8 caracteres.');
        } else if (!/[A-Z]/.test(senha)) {
            setMensagemErro(
                'A senha deve conter pelo menos uma letra maiúscula.'
            );
        } else if (!/[a-z]/.test(senha)) {
            setMensagemErro(
                'A senha deve conter pelo menos uma letra minúscula.'
            );
        } else if (!/[0-9]/.test(senha)) {
            setMensagemErro('A senha deve conter pelo menos um número.');
        } else if (!/[!@#$%^&*]/.test(senha)) {
            setMensagemErro(
                'A senha deve conter pelo menos um caractere especial.'
            );
        } else if (senha !== confirmacaoSenha) {
            setMensagemErro('As senhas não coincidem.');
        } else {
            setMensagemErro('');
        }
    };

    const handleRedefinir = () => {
        setSenha('');
        setConfirmacaoSenha('');
        setMensagemErro('');
    };

    return (
        <div>
            <label htmlFor="senha">Nova Senha:</label>
            <input
                type="password"
                id="senha"
                value={senha}
                onChange={handleSenhaChange}
                placeholder="Digite a nova senha"
            />
            <br />
            <label htmlFor="confirmacaoSenha">Confirme a Senha:</label>
            <input
                type="password"
                id="confirmacaoSenha"
                value={confirmacaoSenha}
                onChange={handleConfirmacaoSenhaChange}
                placeholder="Confirme a nova senha"
            />
            <br />
            {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
            <Botao onClick={handleRedefinir}>Redefinir</Botao>
        </div>
    );
};

export default VerificadorSenha;
