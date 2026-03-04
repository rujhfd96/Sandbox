// src/Pages/HomePage/HomePage.jsx
import { useState } from "react";
import "./HomePage.css";

import HeroVideo from "../../../public/IMAGENS/videoimpor2.mp4";
import LangImg from "../../../public/IMAGENS/linguagem2.jpg";
import WorldImg from "../../../public/IMAGENS/Enriquecimento2.jpg";
import GrowthImg from "../../../public/IMAGENS/Enriquecimento3.jpg";
import CasaSandbox from "../../../public/IMAGENS/piscina.jpg";
import Aviao from "../../../public/IMAGENS/inter.jpg";
import { useLanguage } from "../../context/LanguageContext";
//import faixada from "../../../public/IMAGENS/faixada.jpeg"

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

    aboutTitle: "Sobre Nós",
    aboutP1:
      "Em um mundo acelerado e competitivo, acreditamos que a infância precisa ser respeitada. A Sandbox Escola Internacional de Fortaleza, localizada nas Dunas, é uma escola bilíngue que forma crianças confiantes, autônomas e preparadas para o agora.",
    aboutP2:
      "Do berçário ao Ensino Fundamental, oferecemos ensino infantil e fundamental bilíngue com imersão diária no inglês. Aqui, o idioma não é apenas ensinado — é vivido. Nossos alunos aprendem naturalmente, desenvolvendo fluência, segurança e visão de mundo.",
    aboutP3:
      "Nossa proposta vai além da sala de aula. Somos uma escola com espaço verde em Fortaleza, onde a aprendizagem acontece na natureza, nos projetos, nas artes e nas relações. Valorizamos a formação humana, o desenvolvimento socioemocional e a autonomia.",
    aboutP4:
      "Somos também uma opção de período integral, semi-integral ou apenas um turno em Fortaleza, para famílias que buscam segurança, acolhimento e excelência acadêmica com essência.",
    aboutP5:
      "Preparamos nossos alunos para exames internacionais, intercâmbios e desafios globais sem abrir mão do tempo de ser criança.",
    aboutP6:
      "Escola Internacional de Fortaleza. Educação bilíngue com essência humana. Preparamos para o agora.",

    exchangeTitle: "Programa de Intercâmbio Internacional",
    exchangeP1:
      "Oferecemos aos nossos alunos uma experiência transformadora: três semanas inesquecíveis na cidade de Tucson, nos Estados Unidos.",
    exchangeP2:
      "Mais do que uma viagem, é uma vivência internacional completa.",
    exchangeP3:
      "Durante o programa, os estudantes frequentam a International School of Tucson, integrando-se à rotina escolar americana e experimentando de perto o modelo educacional dos Estados Unidos.",
    exchangeP4:
      "Ao mesmo tempo, participam de atividades culturais, passeios e experiências que ampliam sua visão de mundo.",
    exchangeP5:
      "É uma imersão real na língua inglesa, na cultura e na autonomia.",
    exchangeP6:
      "Ao viver o dia a dia em um ambiente internacional, nossos alunos desenvolvem confiança, independência e segurança para se comunicar naturalmente em inglês — dentro e fora da sala de aula.",
    exchangeP7:
      "O intercâmbio une aprendizado, aventura e crescimento pessoal, fortalecendo a maturidade e ampliando horizontes desde cedo.",
    exchangeP8:
      "Porque ser uma escola internacional é oferecer experiências que ultrapassam fronteiras.",

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

    aboutTitle: "About Us",
    aboutP1:
      "In a fast-paced and competitive world, we believe childhood must be respected. Sandbox International School of Fortaleza, located in the Dunas area, is a bilingual school that nurtures confident, independent children prepared for the present.",
    aboutP2:
      "From nursery to elementary school, we offer bilingual early childhood and elementary education with daily English immersion. Here, the language is not only taught — it is lived. Our students learn naturally, developing fluency, confidence and a global perspective.",
    aboutP3:
      "Our approach goes beyond the classroom. We are a school with green space in Fortaleza, where learning happens through nature, projects, arts and relationships. We value human development, socio-emotional growth and autonomy.",
    aboutP4:
      "We also offer full-time, semi full-time or single-shift options in Fortaleza for families seeking safety, care and academic excellence with purpose.",
    aboutP5:
      "We prepare our students for international exams, exchanges and global challenges without taking away the time to simply be children.",
    aboutP6:
      "International School of Fortaleza. Bilingual education with a human essence. Preparing for the present.",

    exchangeTitle: "International Exchange Program",
    exchangeP1:
      "We offer our students a transformative experience: three unforgettable weeks in the city of Tucson, in the United States.",
    exchangeP2:
      "More than a trip, it is a complete international experience.",
    exchangeP3:
      "During the program, students attend the International School of Tucson, integrating into the American school routine and experiencing the U.S. educational model firsthand.",
    exchangeP4:
      "At the same time, they participate in cultural activities, excursions and experiences that broaden their worldview.",
    exchangeP5:
      "It is a real immersion in the English language, culture and personal independence.",
    exchangeP6:
      "By living daily life in an international environment, our students develop confidence, independence and the ability to communicate naturally in English — both inside and outside the classroom.",
    exchangeP7:
      "The exchange program combines learning, adventure and personal growth, strengthening maturity and expanding horizons from an early age.",
    exchangeP8:
      "Because being an international school means offering experiences that go beyond borders.",

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
