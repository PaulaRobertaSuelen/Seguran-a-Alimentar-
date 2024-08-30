// import  { useState } from 'react';
// import * as S from './stylis'

// export default const ModalPesquisa = ({ isOpen, onClose, searchResults }) => {
//     if (!isOpen) return null;

//     return (
//     <S.Div className="modal-overlay">
//         <S.Conteiner className="modal-content">
//         <S.Button className="close-button" onClick={onClose}>X</S.Button>
//             <S.Resultado>
//             <h1>Resultados da Pesquisa</h1>
//             </S.Resultado>
//                 {  searchResults.length > 0 ? (
//             <S.ContResutado>
//                 {searchResults.map((result, index) => (
//                 <li key={index}>
//                 {result}
//                 </li>
//             ))}
//             </S.ContResutado>
//         ) : (
//             <p>Nenhum resultado encontrado.</p>
//         )}
//         </S.Conteiner>
//     </S.Div>
//     );
// };


