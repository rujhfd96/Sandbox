// src/Pages/SobrePage/SobrePage.jsx
import "./SobrePage.css";
import HeroImg from "../../../public/IMAGENS/principal.jpg";
import AdrianaImg from "../../../public/IMAGENS/faixada.jpg";
import nossaMissao from "../../../public/IMAGENS/missao2.jpg";
import filosofiaImg from "../../../public/IMAGENS/filosofia2.jpg";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    heroTitle: "Sobre a Sandbox",
    sectionSchoolTitle: "Nossa Escola",
    welcomeTitle: "Sejam bem-vindos à Sandbox!",
    welcomeP1:
      "A Sandbox International School nasceu com um propósito diferente: mostrar que aprender pode ser uma aventura cheia de descobertas. Desde os primeiros meses de vida até os 12 anos, nossos alunos crescem em um ambiente bilíngue que integra o melhor dos dois mundos — português e inglês — com leveza e naturalidade.",
    welcomeP2:
      "Nossa escola foi planejada para oferecer experiências completas. Temos áreas amplas, piscina, gramados e espaços de areia que estimulam a imaginação e o movimento. Cada canto foi pensado para acolher e desafiar as crianças, promovendo aprendizado e alegria.",
    missionTitle: "Nossa Missão",
    missionP1:
      "O objetivo da Sandbox International School é promover, em parceria com os pais, a qualidade de experiência individual da criança até os doze anos. A primeira infância é fundamental para a formação integral, e por isso oferecemos um programa cuidadosamente planejado em um ambiente repleto de estímulos.",
    missionP2:
      "Nesse espaço, as crianças aprendem a conviver, compartilhar, ajudar umas às outras, trabalhar em grupo e “sonhar em voz alta”. Nosso ambiente é seguro, saudável e alegre, onde o aprendizado acontece por meio de experiências reais, descobertas e admiração.",
    missionP3:
      "Queremos que cada criança tenha boas lembranças de sua infância e que nossos profissionais se orgulhem de contribuir para esse crescimento. É nossa responsabilidade fazer o que é certo para as crianças — e aceitamos esse compromisso com mente aberta e desejo constante de melhorar.",
    philosophyTitle: "Nossa Filosofia",
    philosophyP1:
      "Nossa filosofia educacional foi construída com base na experiência e no conhecimento. Consideramos todos os aspectos da criança — social, intelectual e físico. Acreditamos que a escola e as famílias são parceiras na educação, e queremos que os pais se sintam acolhidos e compreendidos.",
    philosophyP2:
      "As crianças aprendem brincando, com as mãos nas experiências. Devem poder se sujar, explorar, inventar e descobrir. A brincadeira é a forma mais pura de aprendizado e desenvolve criatividade, empatia e imaginação.",
    philosophyP3:
      "Nosso papel é proporcionar um ambiente divertido e criativo, livre de pressões adultas, onde cada criança possa se desenvolver em seu próprio ritmo, aprendendo com alegria e confiança.",
    valuesTitle: "Nossos Valores",
    value1Title: "Imersão Bilíngue",
    value1Text:
      "As crianças vivem o português e o inglês diariamente. Essa imersão amplia a agilidade cognitiva, o respeito cultural e a comunicação global.",
    value2Title: "Comunidade",
    value2Text:
      "Acreditamos na força da comunidade escolar. Alunos, famílias e equipe caminham juntos com respeito, apoio e cooperação.",
    value3Title: "Cidadania Global",
    value3Text:
      "Preparamos cidadãos do mundo com empatia, ética e colaboração, capazes de atuar positivamente em qualquer cultura.",
    value4Title: "Desenvolvimento Integral",
    value4Text:
      "Cultivamos o crescimento acadêmico, emocional, social e criativo, formando indivíduos confiantes e felizes.",
    heroAria: "Sala de aula com crianças",
    directorAlt: "Foto da diretora",
    missionAlt: "Imagem aluna Sandbox",
    philosophyAlt: "Crianças aprendendo na Sandbox",
  },
  en: {
    heroTitle: "About Sandbox",
    sectionSchoolTitle: "Our School",
    welcomeTitle: "Welcome to Sandbox!",
    welcomeP1:
      "Sandbox International School was created with a different purpose: to show that learning can be an adventure full of discoveries. From the very first months of life up to 12 years old, our students grow in a bilingual environment that blends the best of both worlds — Portuguese and English — with lightness and naturalness.",
    welcomeP2:
      "Our school was designed to offer complete experiences. We have wide open areas, a swimming pool, lawns and sand spaces that stimulate imagination and movement. Every corner has been planned to welcome and challenge children, promoting learning and joy.",
    missionTitle: "Our Mission",
    missionP1:
      "Sandbox International School’s goal is to promote, in partnership with families, the quality of each child’s individual experience up to the age of twelve. Early childhood is fundamental for whole development, so we offer a carefully designed program in an environment full of meaningful stimulation.",
    missionP2:
      "In this space, children learn to live together, share, help one another, work in groups and “dream out loud”. Our environment is safe, healthy and joyful, where learning happens through real experiences, discoveries and wonder.",
    missionP3:
      "We want every child to have good memories of their childhood and for our team to feel proud to contribute to this growth. It is our responsibility to do what is right for children — and we embrace this commitment with an open mind and a constant desire to improve.",
    philosophyTitle: "Our Philosophy",
    philosophyP1:
      "Our educational philosophy is built on experience and knowledge. We consider every aspect of the child — social, intellectual and physical. We believe school and families are partners in education, and we want parents to feel welcomed and understood.",
    philosophyP2:
      "Children learn through play, with hands-on experiences. They should be able to get messy, explore, invent and discover. Play is the purest form of learning and develops creativity, empathy and imagination.",
    philosophyP3:
      "Our role is to provide a fun and creative environment, free from undue adult pressure, where each child can develop at their own pace, learning with joy and confidence.",
    valuesTitle: "Our Values",
    value1Title: "Bilingual Immersion",
    value1Text:
      "Children live in Portuguese and English every day. This immersion boosts cognitive agility, cultural respect and global communication.",
    value2Title: "Community",
    value2Text:
      "We believe in the strength of the school community. Students, families and staff walk together with respect, support and cooperation.",
    value3Title: "Global Citizenship",
    value3Text:
      "We prepare global citizens with empathy, ethics and collaboration, able to act positively in any culture.",
    value4Title: "Whole-Child Development",
    value4Text:
      "We cultivate academic, emotional, social and creative growth, forming confident and joyful individuals.",
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
