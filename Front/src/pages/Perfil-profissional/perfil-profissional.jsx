import * as S from './styles';

// IMPORT DA NAVBAR (ESSA NAVBAR TALVEZ PRECISE SER UMA NOVA, COM O PERFIL JÁ LOGADO)
// import Navbar from "../../components/Navbar/navbar"

// IMPORT DO FOOTER
// import Footer from "../../components/Footer/Footer"

// O REACT-DOM AQUI SERVE PARA CRIAR A RAIZ DA APLICAÇÃO, APARENTEMENTE ISSO PERMITE MELHORES FUNCIONALIDADES COMO A RENDERIZAÇÃO SIMULTÂNEA,O QUE PODE MELHORAR A PERFORMANCE E USABILIDADE DA APLICAÇÃO
// import ReactDOM from "react-dom";
// import NomeUsuario from "../../components/NomeUsuario/nome-usuario"
// import Especialidade from "../../components/FuncaoProfissinal/funcao-profissional"
// import FotoPerfil from "../../components/FotoPerfil/foto-perfil"
// import ValorConsulta from "../../components/ValorConsulta/valor-consulta"
import Bio from '../../components/Bio/bio.jsx';

import Blob4 from '../../assets/blob4.png';
import Blob5 from '../../assets/blob5.png';
import Blob6 from '../../assets/blob6.png';

// import Navbar from "../../components/Navbar/navbar"

export default function PerfilProfissional() {
    return (
        <>
            {/* A NAVBAR FICA AQUI, ACIMA DO BACKGROUND HEADER */}
            {/* <Navbar /> */}

            {/* ADICIONANDO UM HEADER COM UMA COR DE BACKGROUND PARA NÃO PRECISAR ADICIONAR UMA IMAGEM DO RETÂNGULO MAIS ESCURO */}

            <S.BackgroundHeader>
                <img src={Blob4} alt="blob4" />
                <img src={Blob5} alt="blob5" />
                <img src={Blob6} alt="blob6" />
            </S.BackgroundHeader>

            <Bio />

            {/* AQUI FICARIA O FOOTER, LOGO ABAIXO DO BODY */}
        </>
    );
}
