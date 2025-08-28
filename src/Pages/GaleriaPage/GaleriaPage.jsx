
import { useState } from "react";
import "./GaleriaPage.css";
import imagem1 from '../../../public/IMAGENS/casaSandbox.jpg'
import imagem2 from '../../../public/IMAGENS/casaSandbox2.jpg'
import imagem3 from '../../../public/IMAGENS/casaSandbox3.jpeg'

const imagens = [
  imagem1,
  imagem2,
  imagem3
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
