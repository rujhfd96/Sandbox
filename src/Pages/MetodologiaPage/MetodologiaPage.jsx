
import "./MetodologiaPage.css";
import criancaAprendendo from '../../../public/IMAGENS/criancaAprendendo.jpg'
import aulaCriativa from '../../../public/IMAGENS/aulaCriativa.jpg'

export default function MetodologiaPage() {
  return (
    <div className="metodologia-container">
      <div className="texto">
        <h1>Metodologia da Sandbox International School</h1>
        <p>
          Nossa proposta pedagógica é baseada em <strong>pesquisas educacionais contemporâneas</strong> 
          e segue os princípios do <strong>construtivismo</strong>. Aqui, acreditamos que cada criança 
          constrói seu próprio conhecimento de forma ativa, por meio de experiências reais, significativas 
          e conectadas ao seu mundo.
        </p>
        <p>
          Isso significa que, em vez de apenas receber informação, as crianças são estimuladas a questionar, 
          explorar, criar e resolver problemas em um ambiente seguro e acolhedor. 
        </p>
        <p>
          Trabalhamos com projetos que integram <strong>Português e Inglês</strong>, desenvolvendo 
          habilidades cognitivas, sociais e emocionais. Assim, preparamos nossos alunos para se tornarem 
          cidadãos globais, críticos e criativos, prontos para os desafios do futuro.
        </p>
      </div>
      <div className="imagens">
        <img src={aulaCriativa} alt="Aula criativa" />
        <img src={criancaAprendendo} alt="Crianças aprendendo" />
      </div>
    </div>
  );
}
