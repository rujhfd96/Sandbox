// src/Pages/MetodologiaPage/MetodologiaPage.jsx
import { useState } from "react";
import "./MetodologiaPage.css";
import criancaAprendendo from "../../../public/IMAGENS/missao.jpg";
import aulaCriativa from "../../../public/IMAGENS/ruivo.jpg";
import atividades from "../../../public/IMAGENS/atividades.jpg";
import ambiente from "../../../public/IMAGENS/ambiente.jpg";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    mainTitle: "Metodologia da Sandbox International School",
    mainP1:
      "Nossa proposta pedagógica é baseada em pesquisas educacionais contemporâneas e segue os princípios do construtivismo. Aqui, acreditamos que cada criança constrói seu próprio conhecimento de forma ativa, por meio de experiências reais, significativas e conectadas ao seu mundo.",
    mainP2:
      "Isso significa que, em vez de apenas receber informação, as crianças são estimuladas a questionar, explorar, criar e resolver problemas em um ambiente seguro e acolhedor.",
    mainP3:
      "Trabalhamos com projetos que integram Português e Inglês, desenvolvendo habilidades cognitivas, sociais e emocionais. Assim, preparamos nossos alunos para se tornarem cidadãos globais, críticos e criativos, prontos para os desafios do futuro.",
    programTitle: "Nosso Programa",
    programP1:
      "Nosso programa é de alta qualidade, voltado para crianças de 1 a 12 anos. O aprendizado é ativo: as crianças exploram, experimentam e participam de atividades que despertam a curiosidade e a autonomia.",
    programP2:
      "As salas de aula são ricas em materiais, com áreas de atividades diversas que permitem estilos de aprendizado diferentes e formação de personalidades distintas. Proporcionamos um ambiente rico em espaço e material, incentivando as descobertas e a prática.",
    environmentTitle: "Nosso Ambiente",
    environmentP1:
      "Proporcionamos um ambiente rico e orientado às crianças, onde elas se sentem seguras para arriscar e explorar. É um espaço que estimula a criatividade e a imaginação, com desafios que as fazem pensar, resolver problemas e se relacionar.",
    environmentP2:
      "Aqui, as crianças aprendem a administrar conflitos, a serem gentis, compreensivas e tolerantes. O ambiente promove a autodisciplina, a confiança e o respeito mútuo, permitindo que cada uma se desenvolva no seu próprio ritmo.",
    environmentP3:
      "As atividades incluem música e movimento, teatro, blocos, leitura, água e areia, pintura, playground, bicicleta e muito mais. Até a natação faz parte do currículo, contribuindo para um desenvolvimento holístico e saudável.",
    galleryAlt1: "Aula criativa",
    galleryAlt2: "Crianças aprendendo",
    atividadesAlt: "Atividades pedagógicas",
    ambienteAlt: "Ambiente escolar Sandbox",
  },
  en: {
    mainTitle: "Sandbox International School Methodology",
    mainP1:
      "Our pedagogical approach is based on contemporary educational research and follows constructivist principles. We believe that each child builds their own knowledge actively, through real, meaningful experiences connected to their world.",
    mainP2:
      "This means that, instead of just receiving information, children are encouraged to question, explore, create and solve problems in a safe and welcoming environment.",
    mainP3:
      "We work with projects that integrate Portuguese and English, developing cognitive, social and emotional skills. In this way, we prepare our students to become global, critical and creative citizens, ready for future challenges.",
    programTitle: "Our Program",
    programP1:
      "Our program is high-quality and designed for children from 1 to 12 years old. Learning is active: children explore, experiment and take part in activities that spark curiosity and autonomy.",
    programP2:
      "Classrooms are rich in materials, with diverse activity areas that accommodate different learning styles and personalities. We offer a spacious and well-resourced environment that encourages discovery and hands-on practice.",
    environmentTitle: "Our Environment",
    environmentP1:
      "We provide a child-centered environment where children feel safe to take risks and explore. It is a space that fosters creativity and imagination, with challenges that help them think, solve problems and relate to others.",
    environmentP2:
      "Here, children learn to manage conflicts, to be kind, understanding and tolerant. The environment promotes self-discipline, confidence and mutual respect, allowing each child to develop at their own pace.",
    environmentP3:
      "Activities include music and movement, drama, building blocks, reading, water and sand play, painting, playground time, bike riding and much more. Swimming is also part of the curriculum, contributing to holistic and healthy development.",
    galleryAlt1: "Creative classroom activity",
    galleryAlt2: "Children learning",
    atividadesAlt: "Learning activities",
    ambienteAlt: "Sandbox school environment",
  },
};

export default function MetodologiaPage() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];

  const slides = [
    { src: aulaCriativa, alt: t.galleryAlt1 },
    { src: criancaAprendendo, alt: t.galleryAlt2 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="metodologia-container">
      <div className="texto">
        <h1>{t.mainTitle}</h1>
        <p>{t.mainP1}</p>
        <p>{t.mainP2}</p>
        <p>{t.mainP3}</p>
      </div>

      {/* GALERIA / RODAPÉ DE IMAGENS */}
      <div className="galeria">
        <div className="galeria__viewport">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`galeria__img ${
                index === activeIndex ? "is-active" : ""
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          className="galeria__btn galeria__btn--prev"
          onClick={prevSlide}
          aria-label={lang === "pt" ? "Imagem anterior" : "Previous image"}
        >
          ‹
        </button>
        <button
          type="button"
          className="galeria__btn galeria__btn--next"
          onClick={nextSlide}
          aria-label={lang === "pt" ? "Próxima imagem" : "Next image"}
        >
          ›
        </button>

        <div className="galeria__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`galeria__dot ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={
                lang === "pt"
                  ? `Ir para imagem ${index + 1}`
                  : `Go to image ${index + 1}`
              }
            />
          ))}
        </div>
      </div>

      {/* NOSSO PROGRAMA */}
      <div className="texto">
        <h1>{t.programTitle}</h1>
        <p>{t.programP1}</p>
        <p>{t.programP2}</p>
        <img
          src={atividades}
          alt={t.atividadesAlt}
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>

      {/* NOSSO AMBIENTE */}
      <div className="texto">
        <h1>{t.environmentTitle}</h1>
        <p>{t.environmentP1}</p>
        <p>{t.environmentP2}</p>
        <p>{t.environmentP3}</p>
        <img
          src={ambiente}
          alt={t.ambienteAlt}
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
}
