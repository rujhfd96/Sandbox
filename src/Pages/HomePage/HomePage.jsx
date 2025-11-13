// src/Pages/HomePage/HomePage.jsx
import { useState } from "react";
import "./HomePage.css";

import HeroVideo from "../../../public/IMAGENS/videoimpor.mp4";
import LangImg from "../../../public/IMAGENS/linguagem2.jpg";
import WorldImg from "../../../public/IMAGENS/Enriquecimento2.jpg";
import GrowthImg from "../../../public/IMAGENS/Enriquecimento3.jpg";
import CasaSandbox from "../../../public/IMAGENS/piscina.jpg";
import Aviao from "../../../public/IMAGENS/inter.jpg";
import { useLanguage } from "../../context/LanguageContext";

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

const TEXTS = {
  pt: {
    badges: {
      lang: "Linguagem\nImersão",
      world: "Educação\nde Classe Mundial",
      growth: "Enriquecimento\ne Crescimento",
    },
    aboutTitle: "Sobre a escola",
    aboutP1:
      "Na Sandbox International School, o aprendizado começa ainda no berçário e acompanha o aluno até o 7º ano do Ensino Fundamental.",
    aboutP2:
      "Pela manhã, as crianças têm acesso ao currículo regular em português, enquanto no período da tarde mergulham no inglês de forma natural e envolvente.",
    aboutP3:
      "A rotina vai além da sala de aula: os clubes estendem a experiência para depois do horário, combinando aprendizado, convivência e diversão. São momentos em que as crianças exploram talentos, descobrem novos interesses e constroem laços que enriquecem a vida escolar.",
    exchangeTitle: "Programa de intercâmbio",
    exchangeP1:
      "A Sandbox oferece aos alunos uma oportunidade única: três semanas inesquecíveis na cidade de Tucson, nos Estados Unidos.",
    exchangeP2:
      "Durante esse período, as crianças participam de atividades culturais e de lazer, ao mesmo tempo em que frequentam a IST — International School of Tucson, vivenciando de perto o modelo educacional americano.",
    exchangeP3:
      "É uma experiência que mistura aventura, diversão e aprendizado, ampliando horizontes e fortalecendo a confiança em um ambiente internacional.",
    heroAria: "Vídeo de apresentação da escola",
    houseAlt: "Fachada da Escola",
    planeAlt: "Foto de avião",
  },
  en: {
    badges: {
      lang: "Language\nImmersion",
      world: "World-Class\nEducation",
      growth: "Enrichment\nand Growth",
    },
    aboutTitle: "About the School",
    aboutP1:
      "At Sandbox International School, learning begins as early as nursery and continues through the 7th grade of Elementary School.",
    aboutP2:
      "In the morning, children follow the regular Brazilian curriculum in Portuguese, while in the afternoon they are immersed in English in a natural and engaging way.",
    aboutP3:
      "School life goes far beyond the classroom: our clubs extend the experience beyond regular hours, combining learning, friendships and fun. It is a time for children to explore talents, discover new interests and build bonds that enrich their school journey.",
    exchangeTitle: "Exchange Program",
    exchangeP1:
      "Sandbox offers students a unique opportunity: three unforgettable weeks in the city of Tucson, in the United States.",
    exchangeP2:
      "During this period, children take part in cultural and leisure activities while attending IST — International School of Tucson, experiencing the American educational model firsthand.",
    exchangeP3:
      "It is an experience that blends adventure, fun and learning, broadening horizons and strengthening self-confidence in an international environment.",
    heroAria: "School introduction video",
    houseAlt: "School building",
    planeAlt: "Airplane photo",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <main>
      {/* HERO COM VÍDEO */}
      <section className="hero" aria-label={t.heroAria}>
        <button
          type="button"
          className="hero__button"
          onClick={() => setShowPlayer(true)}
        >
          <video
            className="hero__video"
            src={HeroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </button>
      </section>

      {/* MODAL DO VÍDEO COM SOM */}
      {showPlayer && (
        <div className="video-modal" onClick={() => setShowPlayer(false)}>
          <div
            className="video-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={HeroVideo} controls autoPlay />
          </div>
        </div>
      )}

      {/* FEATURES */}
      <section className="features">
        <div className="features__band" />
        <div className="features__badges">
          <FeatureBadge img={LangImg} title={t.badges.lang} />
          <FeatureBadge img={WorldImg} title={t.badges.world} />
          <FeatureBadge img={GrowthImg} title={t.badges.growth} />
        </div>
      </section>

      {/* SOBRE A ESCOLA */}
      <section className="sobre_escola">
        <div className="sobre_escola__content">
          <img src={CasaSandbox} alt={t.houseAlt} />
          <div className="h3cima_pbaixo">
            <h3>{t.aboutTitle}</h3>
            <p>
              {t.aboutP1}
              <br />
              <br />
              {t.aboutP2}
              <br />
              <br />
              {t.aboutP3}
            </p>
          </div>
        </div>
      </section>

      {/* INTERCÂMBIO */}
      <section className="sobre_intercambio">
        <div className="sobre_intercambio__content">
          <div className="h3cima_pbaixo2">
            <h3>{t.exchangeTitle}</h3>
            <p>
              {t.exchangeP1}
              <br />
              <br />
              {t.exchangeP2}
              <br />
              <br />
              {t.exchangeP3}
            </p>
          </div>
          <img src={Aviao} alt={t.planeAlt} />
        </div>
      </section>
    </main>
  );
}
