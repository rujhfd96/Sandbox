
import { useState } from "react";
import "./GaleriaPage.css";
import imagem1 from '../../../public/IMAGENS/livros.jpg'
import imagem2 from '../../../public/IMAGENS/casaSandbox2.jpg'
import imagem3 from '../../../public/IMAGENS/sala1.jpg'
import imagem4 from '../../../public/IMAGENS/piscina.jpg'
import imagem5 from '../../../public/IMAGENS/quadra.jpg'
import imagem6 from '../../../public/IMAGENS/sala4.jpg'
import imagem7 from '../../../public/IMAGENS/arCond.jpg'


const imagens = [
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem5, 
  imagem6, 
  imagem7
];

export default function GaleriaPage() {
  const [indice, setIndice] = useState(0);

  const proxima = () => setIndice((indice + 1) % imagens.length);
  const anterior = () => setIndice((indice - 1 + imagens.length) % imagens.length);

  return (
    <div className="galeria-container">
      <div className="slider">
        <img src={imagens[indice]} alt="Escola Sandbox" className="imagem" />
        <button className="botao-anterior" onClick={anterior}>‹</button>
        <button className="botao-proxima" onClick={proxima}>›</button>
      </div>
    </div>
  );
}
