import React from "react";
import * as S from "./styles";

import Bio from "../../components/Bio/bio"
import Navbar from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/footer"

export default function PerfilProfissional() {
    return (

        <>

        <Navbar />

        <S.Body>

        <Bio />

        </S.Body>

        <Footer />
        
        </>

    );
}