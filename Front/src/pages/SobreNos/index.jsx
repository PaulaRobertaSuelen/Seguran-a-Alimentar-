
import Navbar from '../../components/Navbar'
import * as S from './styles';

export default  function SobreNois () {
    return(
            <>
                    
                    <Navbar/>

                            <S.Tag>
                                    <h2> SOBRE NÓS </h2>
                            </S.Tag>

                                    <S.TexUm>
                                        <p>
                                        No BEM TEA, facilitamos o acesso entre pais e profissionais especializados para melhorar a alimentação de crianças com Transtorno do Espectro Autista (TEA). Nosso site oferece guias e uma rede de especialistas para ajudar os pais a promoverem uma alimentação saudável para seus filhos.
                                        </p>
                                    </S.TexUm>

                                            <S.ContImg>
                                                <S.ImLinha src="src/assets/Linha.png   " alt= "imagem de uma linha"/>
                                            </S.ContImg>

                                                    <S.TexDois>
                                                        <p>
                                                        Nascemos do projeto Start, em parceria com a Rede Cidadã, e somos um grupo de seis pessoas dedicadas a transformar a vida dessas crianças através da nutrição.
                                                        </p>
                                                    </S.TexDois>

                                        <S.ContImagem>
                                            <S.Im src= "src/assets/menino-laranja.png"   alt="imagem de uma criança "/>
                                        </S.ContImagem>


                                            <S.ContAzul>
                                                    <S.Caixa>
                                                        <S.ImLogo src= "src/assets/nome-logo.png" alt= "foto da logo"/>

                                                            <S.TexT>
                                                                <p>Somos uma equipe dedicada de seis pessoas que compartilham a paixão por ajudar pais, mães e responsáveis a lidar com a seletividade alimentar em crianças autistas. Nosso objetivo é fornecer suporte, informações e estratégias para tornar as refeições um momento mais agradável e nutritivo para todos.</p>
                                                            </S.TexT>

                                                                <S.ContImagems>
                                                                            <p>Membros</p>
                                                                    <S.ContImgUm>
                                                                    <S.ImgUm src= "src/assets/ItalaS.png" alt= "foto de Itala"/>
                                                                    <p> Itala Samara </p> 
                                                                    </S.ContImgUm>

                                                                    <S.ContImgDois>
                                                                    <S.ImgDois src= "src/assets/Joao.png" alt= "foto de Joao"/>
                                                                        <p> João Victor</p>
                                                                    </S.ContImgDois>

                                                                    <S.ContImgTres>
                                                                    <S.ImgTres src= "src/assets/Laysa.png" alt= "foto de laysa"/>
                                                                        <p>Laysa Elisabeth</p>
                                                                    </S.ContImgTres>

                                                                    <S.ContImgQuatro>
                                                                    <S.ImgQuatro src= "src/assets/Paula.png" alt= "foto de Paula"/>
                                                                        <p>Paula Roberta</p>
                                                                    </S.ContImgQuatro>

                                                                    {/* <S.ContImgQuinto>

                                                                    </S.ContImgQuinto>

                                                                    <S.ContImgSexto>

                                                                    </S.ContImgSexto> */}



                                                                </S.ContImagems>

                                                                
                                                    </S.Caixa>
                                            </S.ContAzul>


            </>
    )
}


