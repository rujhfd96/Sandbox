// src/Pages/SobrePage/SobrePage.jsx
import "./SobrePage.css";
import HeroImg from "../../../public/IMAGENS/principal.jpg";
import AdrianaImg from "../../../public/IMAGENS/faixada.jpg";
import nossaMissao from "../../../public/IMAGENS/missao2.jpg";
import filosofiaImg from "../../../public/IMAGENS/filosofia2.jpg";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    heroTitle: "Sobre a Sandbox", // NÃO tirar

    sectionSchoolTitle: "Nossa Escola",

    welcomeTitle: "Boas-vindas",
    welcomeP1: "Seja bem-vindo à Escola Internacional de Fortaleza.",
    welcomeP2:
      "Vivemos em um mundo que muda todos os dias — e acreditamos que a educação precisa preparar para o aqui e o agora. Mas também acreditamos que a infância não pode ser apressada.",
    welcomeP3:
      "Somos o encontro entre imaginação e possibilidades reais. Entre raízes locais e visão global. Entre acolhimento e excelência acadêmica.",
    welcomeP4:
      "Aqui, o inglês não é apenas uma disciplina. É vivência, imersão e conexão com o mundo — desenvolvida com naturalidade, confiança e autonomia.",
    welcomeP5:
      "Aprender, para nós, vai além da sala de aula. Acontece na areia, sob as árvores, nos projetos, nas experiências e nas descobertas que despertam curiosidade e coragem.",

    missionTitle: "Missão",
    missionP1:
      "Formar cidadãos globais com base acadêmica sólida, fluência em inglês e desenvolvimento humano integral, respeitando o tempo e o processo de cada criança.",
    missionP2:
      "Preparamos nossos alunos para exames internacionais, intercâmbios, novas culturas e desafios reais — sem perder de vista o presente, a infância e o desenvolvimento emocional.",
    missionP3:
      "Nossa missão é unir educação internacional e formação humana, preparando para o futuro enquanto valorizamos profundamente o agora.",

    philosophyTitle: "Filosofia",
    philosophyP1:
      "Na Sandbox Escola Internacional de Fortaleza, acreditamos que educar é preparar para o mundo sem apressar a infância.",
    philosophyP2:
      "Unimos excelência acadêmica e formação humana, integrando base sólida, fluência em inglês e desenvolvimento emocional. Para nós, o aprendizado é vivo: acontece nas experiências, nas relações, na investigação e na descoberta.",
    philosophyP3:
      "Valorizamos o tempo de cada criança, respeitamos seus processos e cultivamos autonomia, confiança e protagonismo.",
    philosophyP4:
      "Somos internacionais porque formamos cidadãos capazes de dialogar com o mundo.",
    philosophyP5:
      "Somos de Fortaleza porque acreditamos no acolhimento, na proximidade e na construção de vínculos verdadeiros.",
    philosophyP6:
      "Preparamos para certificações, intercâmbios e desafios reais. Mas, acima de tudo, formamos para o presente — com consciência, identidade e propósito.",

    // Mantive "Nossos Valores" para não quebrar a estrutura, mas adaptei o texto ao novo conteúdo
    valuesTitle: "Nossos Valores",
    value1Title: "Vivência Bilíngue",
    value1Text:
      "O inglês é vivência, imersão e conexão com o mundo — desenvolvido com naturalidade, confiança e autonomia.",
    value2Title: "Infância Respeitada",
    value2Text:
      "Acreditamos que a infância não pode ser apressada. Respeitamos o tempo e o processo de cada criança.",
    value3Title: "Visão Global, Raízes Locais",
    value3Text:
      "Somos o encontro entre raízes locais e visão global: acolhimento, proximidade e vínculos verdadeiros.",
    value4Title: "Excelência com Humanidade",
    value4Text:
      "Unimos excelência acadêmica e formação humana, integrando base sólida, fluência em inglês e desenvolvimento emocional.",

    heroAria: "Sala de aula com crianças",
    directorAlt: "Foto da diretora",
    missionAlt: "Imagem aluna Sandbox",
    philosophyAlt: "Crianças aprendendo na Sandbox",
  },

  en: {
    heroTitle: "About Sandbox", // mantém o equivalente em inglês

    sectionSchoolTitle: "Our School",

    welcomeTitle: "Welcome",
    welcomeP1: "Welcome to Fortaleza International School.",
    welcomeP2:
      "We live in a world that changes every day — and we believe education must prepare children for the here and now. But we also believe childhood should not be rushed.",
    welcomeP3:
      "We are where imagination meets real possibilities — where local roots meet a global vision — where warmth meets academic excellence.",
    welcomeP4:
      "Here, English is not just a subject. It is lived experience, immersion, and connection with the world — developed naturally, with confidence and autonomy.",
    welcomeP5:
      "For us, learning goes beyond the classroom. It happens in the sand, under the trees, through projects, experiences, and discoveries that awaken curiosity and courage.",

    missionTitle: "Mission",
    missionP1:
      "To develop global citizens with a strong academic foundation, English fluency, and whole-child development, respecting each child’s time and learning process.",
    missionP2:
      "We prepare students for international exams, exchange programs, new cultures, and real-world challenges — without losing sight of the present, childhood, and emotional development.",
    missionP3:
      "Our mission is to unite international education and human formation, preparing for the future while deeply valuing the now.",

    philosophyTitle: "Philosophy",
    philosophyP1:
      "At Sandbox Fortaleza International School, we believe educating means preparing for the world without rushing childhood.",
    philosophyP2:
      "We unite academic excellence and human development, integrating a solid foundation, English fluency, and emotional growth. For us, learning is alive: it happens through experiences, relationships, inquiry, and discovery.",
    philosophyP3:
      "We value each child’s time, respect their process, and cultivate autonomy, confidence, and agency.",
    philosophyP4:
      "We are international because we educate citizens who can engage in dialogue with the world.",
    philosophyP5:
      "We are from Fortaleza because we believe in warmth, closeness, and building genuine bonds.",
    philosophyP6:
      "We prepare students for certifications, exchange programs, and real challenges. But above all, we educate for the present — with awareness, identity, and purpose.",

    valuesTitle: "Our Values",
    value1Title: "Bilingual Experience",
    value1Text:
      "English is lived experience, immersion, and connection with the world — developed naturally, with confidence and autonomy.",
    value2Title: "A Childhood Respected",
    value2Text:
      "We believe childhood should not be rushed. We respect each child’s time and learning process.",
    value3Title: "Global Vision, Local Roots",
    value3Text:
      "We are where local roots meet a global vision: warmth, closeness, and genuine bonds.",
    value4Title: "Excellence with Humanity",
    value4Text:
      "We unite academic excellence and human development, integrating a solid foundation, English fluency, and emotional growth.",

    heroAria: "Classroom with children",
    directorAlt: "Photo of the principal",
    missionAlt: "Sandbox student image",
    philosophyAlt: "Children learning at Sandbox",
  },
};

function SobrePage() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];

  return (
    <main>
      {/* HERO */}
      <section
        className="hero2"
        style={{ backgroundImage: `url(${HeroImg})` }}
        aria-label={t.heroAria}
      >
        <h1>{t.heroTitle}</h1>
      </section>

      {/* NOSSA ESCOLA */}
      <section className="features2">
        <div className="features__band2">
          <h1>{t.sectionSchoolTitle}</h1>
        </div>

        <div className="container_mae">
          <img
            src={AdrianaImg}
            alt={t.directorAlt}
            className="AdrianaImg"
          />
          <div className="container_texto_4">
  <h2>{t.welcomeTitle}</h2>
  <p>{t.welcomeP1}</p>
  <p>{t.welcomeP2}</p>
  <p>{t.welcomeP3}</p>
  <p>{t.welcomeP4}</p>
  <p>{t.welcomeP5}</p>
</div>
        </div>
      </section>

      {/* NOSSA MISSÃO */}
      <section className="nossa_missao">
        <div className="nossa_missao_content">
          <img src={nossaMissao} alt={t.missionAlt} />
          <div className="cima-baixo2">
            <h3>{t.missionTitle}</h3>
            <p>{t.missionP1}</p>
            <p>{t.missionP2}</p>
            <p>{t.missionP3}</p>
          </div>
        </div>
      </section>

      {/* NOSSA FILOSOFIA */}
      <section className="nossa_filosofia">
        <div className="nossa_filosofia_content">
          <img src={filosofiaImg} alt={t.philosophyAlt} />
          <div className="nossa_filosofia_texto">
            <h3>{t.philosophyTitle}</h3>
            <p>{t.philosophyP1}</p>
            <p>{t.philosophyP2}</p>
            <p>{t.philosophyP3}</p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="valores">
        <div className="valores_content">
          <h2>{t.valuesTitle}</h2>
          <div className="valores_grid">
            <div className="valor_card">
              <h3>{t.value1Title}</h3>
              <p>{t.value1Text}</p>
            </div>

            <div className="valor_card">
              <h3>{t.value2Title}</h3>
              <p>{t.value2Text}</p>
            </div>

            <div className="valor_card">
              <h3>{t.value3Title}</h3>
              <p>{t.value3Text}</p>
            </div>

            <div className="valor_card">
              <h3>{t.value4Title}</h3>
              <p>{t.value4Text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SobrePage;
