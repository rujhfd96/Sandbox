import "./HomePage.css";

import HeroImg from "../../../public/IMAGENS/principal.jpg";
import LangImg from "../../../public/IMAGENS/linguagem2.jpg";
import WorldImg from "../../../public/IMAGENS/Enriquecimento2.jpg";
import GrowthImg from "../../../public/IMAGENS/Enriquecimento3.jpg";
import CasaSandbox from "../../../public/IMAGENS/piscina.jpg";
import Aviao from "../../../public/IMAGENS/inter.jpg";

function FeatureBadge({ img, title }) {
  return (
    <div className="badge">
      <div className="badge__circle">
        <img src={img} alt={title} />
      </div>
      <div className="badge__ribbon">
        <span className="badge__label">{title}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      
      <section className="hero" aria-label="Sala de aula com crianças">
        <img src={HeroImg} alt="Sala de aula com crianças" className="hero__img" />
      </section>

      <section className="features">
        <div className="features__band" />
        <div className="features__badges">
          <FeatureBadge img={LangImg} title={"Linguagem\nImmersão"} />
          <FeatureBadge img={WorldImg} title={"Educação\nde Classe Mundial"} />
          <FeatureBadge img={GrowthImg} title={"Enriquecimento\ne Crescimento"} />
        </div>
      </section>

      <section className="sobre_escola">
        <div className="sobre_escola__content">
          <img src={CasaSandbox} alt="Fachada da Escola" />
          <div className="h3cima_pbaixo">
            <h3>Sobre a escola</h3>
            <p>
              Na Sandbox International School, o aprendizado começa ainda no
              berçário e acompanha o aluno até o 7º ano do Ensino Fundamental.
              Pela manhã, as crianças têm acesso ao currículo regular em português,
              enquanto no período da tarde mergulham no inglês de forma natural e
              envolvente. <br /><br />
              A rotina vai além da sala de aula: os clubes estendem a experiência
              para depois do horário, combinando aprendizado, convivência e
              diversão. São momentos em que as crianças exploram talentos,
              descobrem novos interesses e constroem laços que enriquecem a vida
              escolar.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre_intercambio">
        <div className="sobre_intercambio__content">
          <div className="h3cima_pbaixo2">
            <h3>Programa de intercâmbio</h3>
            <p>
              A Sandbox oferece aos alunos uma oportunidade única: três semanas inesquecíveis na cidade de Tucson, nos Estados Unidos. Durante esse período, 
              as crianças participam de atividades culturais e de lazer, ao mesmo tempo em que frequentam a IST — International School of Tucson, vivenciando de perto o modelo educacional americano.
              É uma experiência que mistura aventura, diversão e aprendizado, ampliando horizontes e fortalecendo a confiança em um ambiente internacional.
            </p>
          </div>
          <img src={Aviao} alt="Foto de avião" />
        </div>
      </section>
    </main>
  );
}
