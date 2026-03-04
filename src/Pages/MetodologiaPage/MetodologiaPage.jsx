// src/Pages/MetodologiaPage/MetodologiaPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MetodologiaPage.css";
import criancaAprendendo from "../../../public/IMAGENS/missao.jpg";
import aulaCriativa from "../../../public/IMAGENS/ruivo.jpg";
import atividades from "../../../public/IMAGENS/atividades.jpg";
import ambiente from "../../../public/IMAGENS/ambiente.jpg";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    mainTitle: "Metodologia da Escola Internacional de Fortaleza",

    mainP1:
      "A metodologia da Escola Internacional de Fortaleza é fundamentada em pesquisas educacionais contemporâneas, na abordagem construtivista e na metodologia baseada em projetos, com inspiração na filosofia de Reggio Emilia.",
    mainP2:
      "Como escola internacional e bilíngue em Fortaleza, acreditamos que a criança não é apenas receptora de conteúdo — é protagonista do próprio aprendizado. Nossa proposta de ensino infantil e ensino fundamental bilíngue nas Dunas valoriza experiências reais, significativas e conectadas ao cotidiano.",
    mainP3:
      "Aqui, o conhecimento é construído no diálogo, na investigação, na natureza, nas artes e nas relações. É uma educação difusa, que ultrapassa os limites da sala de aula e transforma cada espaço da escola em ambiente de descoberta.",
    mainP4:
      "Em vez de apenas transmitir informação, estimulamos nossos alunos a questionar, explorar, criar, testar hipóteses e resolver problemas com autonomia e pensamento crítico — sempre em um ambiente seguro, acolhedor e emocionalmente saudável.",
    mainP5:
      "Trabalhamos com projetos integrados em Português e Inglês, promovendo imersão natural no segundo idioma desde a Educação Infantil. O resultado é um ensino bilíngue em Fortaleza que desenvolve habilidades cognitivas, sociais e emocionais de forma equilibrada.",
    mainP6:
      "Nosso compromisso é formar crianças confiantes, criativas e conscientes do seu potencial — preparadas para dialogar com o mundo e viver plenamente no agora.",
    mainP7:
      "Descubra por que a Escola Internacional de Fortaleza é referência em educação bilíngue com essência humana.",

    ctaVisit: "Agende uma visita",
    ctaWhatsapp: "Fale conosco pelo WhatsApp",
    ctaTrial: "Inscreva-se para uma aula experimental",

    programTitle: "Nosso Programa",
    programP1:
      "Na Sandbox International School, integramos a Base Nacional Comum Curricular (BNCC) à imersão real em inglês, formando alunos preparados para os desafios do mundo globalizado.",
    programP2:
      "No turno da manhã, seguimos integralmente a BNCC, com foco em alfabetização estruturada, raciocínio lógico-matemático, investigação científica, leitura, produção textual e desenvolvimento socioemocional. Trabalhamos com metodologia ativa e acompanhamento individualizado, promovendo formação integral.",
    programP3:
      "Somos Centro de Treinamento preparatório para certificações da Cambridge Assessment English, referência mundial em avaliação da língua inglesa. Preparamos nossos alunos para exames internacionais como Young Learners, A2 Key e B1 Preliminary, garantindo reconhecimento oficial da proficiência em inglês.",
    programP4:
      "No período complementar, oferecemos Clubs de Imersão em Inglês, como Science, Cooking, Arts, Drama, Sports e Global Citizenship. Aqui, o inglês é vivenciado de forma natural — e a aprendizagem acontece na prática.",

    environmentTitle: "Nosso Ambiente",
    environmentP1:
      "Na Sandbox International School, o ambiente é parte essencial da aprendizagem. Inspirados na abordagem de Reggio Emilia, acreditamos que o espaço também educa, acolhe e inspira.",
    environmentP2:
      "Cada detalhe é cuidadosamente planejado para que a criança se sinta segura, pertencente e encorajada a explorar com autonomia e confiança.",
    environmentP3:
      "Contamos com amplas áreas ao ar livre, piscina integrada ao currículo, salas climatizadas, sala de Lego que estimula raciocínio lógico e inteligência espacial, ateliê de artes para expressão criativa, quadra esportiva, além de parquinho com areia que favorece imaginação, construção e experimentação sensorial.",
    environmentP4:
      "Nossos espaços convidam à descoberta, ao movimento e à convivência. Aqui, a criança aprende vivendo, explorando, criando e se relacionando em um ambiente que respeita seu tempo, valoriza suas múltiplas linguagens e fortalece sua identidade.",

    galleryAlt1: "Aula criativa",
    galleryAlt2: "Crianças aprendendo",
    atividadesAlt: "Atividades pedagógicas",
    ambienteAlt: "Ambiente escolar Sandbox",

    ariaPrev: "Imagem anterior",
    ariaNext: "Próxima imagem",
    ariaGoTo: "Ir para imagem",
  },

  en: {
    mainTitle: "Fortaleza International School Methodology",

    mainP1:
      "The methodology of Fortaleza International School is grounded in contemporary educational research, a constructivist approach, and project-based learning, inspired by the Reggio Emilia philosophy.",
    mainP2:
      "As an international, bilingual school in Fortaleza, we believe children are not merely recipients of content — they are the protagonists of their own learning. Our bilingual early years and elementary program in Dunas values real, meaningful experiences connected to everyday life.",
    mainP3:
      "Here, knowledge is built through dialogue, investigation, nature, the arts, and relationships. Learning goes beyond the classroom and turns every space in the school into an environment of discovery.",
    mainP4:
      "Rather than simply transmitting information, we encourage students to question, explore, create, test hypotheses, and solve problems with autonomy and critical thinking — always in a safe, welcoming, and emotionally healthy environment.",
    mainP5:
      "We work with integrated projects in Portuguese and English, promoting natural immersion in a second language from Early Childhood Education. The result is a bilingual education in Fortaleza that develops cognitive, social, and emotional skills in a balanced way.",
    mainP6:
      "Our commitment is to develop confident, creative children who are aware of their potential — prepared to engage with the world and live fully in the present.",
    mainP7:
      "Discover why Fortaleza International School is a reference in bilingual education with a human-centered essence.",

    ctaVisit: "Schedule a visit",
    ctaWhatsapp: "Chat with us on WhatsApp",
    ctaTrial: "Sign up for a trial class",

    programTitle: "Our Program",
    programP1:
      "At Sandbox International School, we integrate Brazil’s National Common Core Curriculum (BNCC) with real English immersion, preparing students for the challenges of a globalized world.",
    programP2:
      "In the morning program, we fully follow the BNCC with a focus on structured literacy, logical-mathematical reasoning, scientific inquiry, reading, writing, and socio-emotional development. We use active learning and individualized support, promoting holistic education.",
    programP3:
      "We are a Cambridge Assessment English preparation center — a world reference in English language assessment. We prepare students for international exams such as Young Learners, A2 Key, and B1 Preliminary, ensuring official recognition of English proficiency.",
    programP4:
      "In the complementary period, we offer English Immersion Clubs such as Science, Cooking, Arts, Drama, Sports, and Global Citizenship. Here, English is experienced naturally — and learning happens through practice.",

    environmentTitle: "Our Environment",
    environmentP1:
      "At Sandbox International School, the environment is an essential part of learning. Inspired by the Reggio Emilia approach, we believe the space also teaches, welcomes, and inspires.",
    environmentP2:
      "Every detail is carefully planned so that children feel safe, included, and encouraged to explore with autonomy and confidence.",
    environmentP3:
      "We offer large outdoor areas, a swimming pool integrated into the curriculum, air-conditioned classrooms, a Lego room that strengthens logical reasoning and spatial intelligence, an arts studio for creative expression, a sports court, and a sand playground that supports imagination, building, and sensory exploration.",
    environmentP4:
      "Our spaces invite discovery, movement, and connection. Here, children learn by living, exploring, creating, and relating in an environment that respects their pace, values multiple forms of expression, and strengthens identity.",

    galleryAlt1: "Creative class",
    galleryAlt2: "Children learning",
    atividadesAlt: "Learning activities",
    ambienteAlt: "Sandbox school environment",

    ariaPrev: "Previous image",
    ariaNext: "Next image",
    ariaGoTo: "Go to image",
  },
};

const WHATSAPP_PHONE_E164 = "5585987563949"; // +55 85 98756-3949 (sem + e sem espaços)

export default function MetodologiaPage() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];

  const slides = [
    { src: aulaCriativa, alt: t.galleryAlt1 },
    { src: criancaAprendendo, alt: t.galleryAlt2 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_E164}`;

  return (
    <div className="metodologia-container">
      {/* TEXTO PRINCIPAL */}
      <div className="texto">
        <h1>{t.mainTitle}</h1>
        <p>{t.mainP1}</p>
        <p>{t.mainP2}</p>
        <p>{t.mainP3}</p>
        <p>{t.mainP4}</p>
        <p>{t.mainP5}</p>
        <p>{t.mainP6}</p>
        <p>{t.mainP7}</p>

        {/* CTAs */}
        <div className="metodologia-links">
          <Link to="/formulario">{t.ctaVisit}</Link>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {t.ctaWhatsapp}
          </a>

          <Link to="/formulario">{t.ctaTrial}</Link>
        </div>
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
          aria-label={t.ariaPrev}
        >
          ‹
        </button>
        <button
          type="button"
          className="galeria__btn galeria__btn--next"
          onClick={nextSlide}
          aria-label={t.ariaNext}
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
              aria-label={`${t.ariaGoTo} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* NOSSO PROGRAMA */}
      <div className="texto">
        <h1>{t.programTitle}</h1>
        <p>{t.programP1}</p>
        <p>{t.programP2}</p>
        <p>{t.programP3}</p>
        <p>{t.programP4}</p>

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
        <p>{t.environmentP4}</p>

        <img
          src={ambiente}
          alt={t.ambienteAlt}
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
}