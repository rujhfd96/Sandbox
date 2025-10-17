import "./MetodologiaPage.css";
import criancaAprendendo from "../../../public/IMAGENS/missao.jpg";
import aulaCriativa from "../../../public/IMAGENS/ruivo.jpg";
import atividades from "../../../public/IMAGENS/atividades.jpg";
import ambiente from "../../../public/IMAGENS/ambiente.jpg";

export default function MetodologiaPage() {
  return (
    <div className="metodologia-container">
      <div className="texto">
        <h1>Metodologia da Sandbox International School</h1>
        <p>
          Nossa proposta pedagógica é baseada em{" "}
          <strong>pesquisas educacionais contemporâneas</strong> e segue os
          princípios do <strong>construtivismo</strong>. Aqui, acreditamos que
          cada criança constrói seu próprio conhecimento de forma ativa, por
          meio de experiências reais, significativas e conectadas ao seu mundo.
        </p>
        <p>
          Isso significa que, em vez de apenas receber informação, as crianças
          são estimuladas a questionar, explorar, criar e resolver problemas em
          um ambiente seguro e acolhedor.
        </p>
        <p>
          Trabalhamos com projetos que integram <strong>Português e Inglês</strong>,
          desenvolvendo habilidades cognitivas, sociais e emocionais. Assim,
          preparamos nossos alunos para se tornarem cidadãos globais, críticos e
          criativos, prontos para os desafios do futuro.
        </p>
      </div>

      <div className="imagens">
        <img src={aulaCriativa} alt="Aula criativa" />
        <img src={criancaAprendendo} alt="Crianças aprendendo" />
      </div>

      {/* NOVA SEÇÃO: NOSSO PROGRAMA */}
      <div className="texto">
        <h1>Nosso Programa</h1>
        <p>
          Nosso programa é de <strong>alta qualidade</strong>, voltado para
          crianças de 1 a 12 anos. O aprendizado é ativo: as crianças exploram,
          experimentam e participam de atividades que despertam a curiosidade e
          a autonomia.
        </p>
        <p>
          As salas de aula são ricas em materiais, com áreas de atividades
          diversas que permitem estilos de aprendizado diferentes e formação de
          personalidades distintas. Proporcionamos um ambiente rico em espaço e
          material, incentivando as descobertas e a prática.
        </p>
        <img
          src={atividades}
          alt="Atividades pedagógicas"
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>

      {/* NOVA SEÇÃO: NOSSO AMBIENTE */}
      <div className="texto">
        <h1>Nosso Ambiente</h1>
        <p>
          Proporcionamos um ambiente <strong>rico e orientado às crianças</strong>,
          onde elas se sentem seguras para arriscar e explorar. É um espaço que
          estimula a criatividade e a imaginação, com desafios que as fazem
          pensar, resolver problemas e se relacionar.
        </p>
        <p>
          Aqui, as crianças aprendem a administrar conflitos, a serem gentis,
          compreensivas e tolerantes. O ambiente promove a autodisciplina, a
          confiança e o respeito mútuo, permitindo que cada uma se desenvolva no
          seu próprio ritmo.
        </p>
        <p>
          As atividades incluem música e movimento, teatro, blocos, leitura,
          água e areia, pintura, playground, bicicleta e muito mais. Até a
          natação faz parte do currículo, contribuindo para um desenvolvimento
          holístico e saudável.
        </p>
        <img
          src={ambiente}
          alt="Ambiente escolar Sandbox"
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
}
