import { useMemo, useState } from "react";
import "./FaqPage.css";
import { useLanguage } from "../../context/LanguageContext";

const FAQ_TEXTS = {
  pt: {
    headerTitle: "Perguntas e Respostas – Sandbox International School",
    subtitle:
      "Encontre aqui respostas rápidas sobre nossa proposta bilíngue, rotina e matrículas.",
    searchPlaceholder:
      "Buscar por palavra-chave (ex.: bilíngue, matrícula)...",
    searchAriaLabel: "Buscar perguntas e respostas",
    expandAll: "Expandir tudo",
    collapseAll: "Recolher tudo",
    tocAria: "Categorias do FAQ",
    emptyStatePrefix: "Nenhum resultado encontrado para",
    sections: [
      {
        id: "sobre-a-escola",
        title: "Sobre a Escola",
        items: [
          {
            q: "A Sandbox é uma escola bilíngue em Fortaleza?",
            a: "Sim! A Sandbox é uma escola bilíngue em Fortaleza, onde as crianças têm contato diário com o inglês desde o berçário até o 6º ano.",
          },
          {
            q: "Vocês oferecem do berçário até qual série?",
            a: "Atendemos do berçário ao 6º ano do Ensino Fundamental, acompanhando o crescimento e o desenvolvimento integral das crianças.",
          },
          {
            q: "Como funciona a adaptação das crianças novas na escola?",
            a: "Fazemos a adaptação de forma gradual e acolhedora, respeitando o tempo de cada criança e envolvendo a família nesse processo.",
          },
          {
            q: "Quais são os diferenciais da Sandbox em relação a outras escolas particulares de Fortaleza?",
            a: "Nossa proposta é bilíngue, baseada em aprendizado ativo, inclusão e parceria com as famílias, formando crianças seguras, criativas e preparadas para o futuro.",
          },
        ],
      },
      {
        id: "ensino-bilingue-e-metodologia",
        title: "Ensino Bilíngue e Metodologia",
        items: [
          {
            q: "As crianças realmente aprendem inglês no dia a dia?",
            a: "Sim! O inglês faz parte da rotina diária, em atividades, brincadeiras e projetos, permitindo que as crianças aprendam de forma natural.",
          },
          {
            q: "A Sandbox segue alguma metodologia específica de ensino?",
            a: "Trabalhamos com aprendizagem ativa, estimulando a criatividade, a curiosidade e o protagonismo das crianças em cada etapa.",
          },
          {
            q: "Como vocês trabalham a criatividade e o desenvolvimento integral dos alunos?",
            a: "Por meio de projetos, atividades artísticas, esportivas e culturais que desenvolvem não só o conhecimento acadêmico, mas também habilidades socioemocionais.",
          },
        ],
      },
      {
        id: "bercario-e-educacao-infantil",
        title: "Berçário e Educação Infantil",
        items: [
          {
            q: "A Sandbox tem berçário em Fortaleza?",
            a: "Sim, oferecemos berçário em Fortaleza com ambiente seguro, acolhedor e bilíngue para bebês a partir dos 6 meses.",
          },
          {
            q: "Como é o cuidado com bebês e crianças pequenas?",
            a: "Contamos com equipe especializada, rotina de cuidados individualizados, alimentação saudável e muito carinho.",
          },
          {
            q: "Que tipos de atividades pedagógicas e lúdicas são oferecidas no infantil?",
            a: "Trabalhamos com música, artes, movimento, contação de histórias e atividades bilíngues que estimulam o desenvolvimento integral.",
          },
        ],
      },
      {
        id: "ensino-fundamental",
        title: "Ensino Fundamental",
        items: [
          {
            q: "Vocês oferecem Ensino Fundamental bilíngue em Fortaleza?",
            a: "Sim! Do 1º ao 6º ano, nossos alunos têm aulas bilíngues e um currículo que une conhecimento acadêmico e formação para a vida.",
          },
          {
            q: "Como a escola prepara os alunos para os desafios do futuro?",
            a: "Estimulamos pensamento crítico, criatividade, colaboração e fluência em inglês, preparando as crianças para um mundo globalizado.",
          },
          {
            q: "Há acompanhamento individualizado no aprendizado?",
            a: "Sim! Acompanhamos o desenvolvimento de cada aluno de forma próxima, garantindo que todos avancem no seu ritmo.",
          },
        ],
      },
      {
        id: "estrutura-e-seguranca",
        title: "Estrutura e Segurança",
        items: [
          {
            q: "A escola é segura? Como funciona o controle de entrada e saída?",
            a: "Sim, temos protocolos de segurança, controle de acesso e equipe treinada para garantir o bem-estar de todos.",
          },
          {
            q: "Como são as salas de aula e os espaços de convivência?",
            a: "Nossos ambientes são amplos, climatizados e pensados para estimular o aprendizado e a socialização das crianças.",
          },
          {
            q: "Vocês oferecem alimentação na escola?",
            a: "Sim, oferecemos alimentação saudável e equilibrada, preparada especialmente para as necessidades das crianças.",
          },
        ],
      },
      {
        id: "matriculas-e-vagas",
        title: "Matrículas e Vagas",
        items: [
          {
            q: "Como faço para agendar uma visita à escola?",
            a: "Você pode agendar uma visita pelo WhatsApp ou pelo nosso site. Será um prazer receber sua família na Sandbox!",
          },
          {
            q: "Há vagas disponíveis para 2026?",
            a: "Sim! Estamos com matrículas abertas para 2026, do berçário ao 6º ano.",
          },
          {
            q: "A escola oferece descontos ou condições especiais para matrícula?",
            a: "Sim, até setembro temos 35% de desconto na primeira parcela de 2026.",
          },
          {
            q: "Até quando vão as matrículas abertas?",
            a: "As matrículas ficam abertas até o preenchimento das vagas. Recomendamos garantir a sua vaga o quanto antes!",
          },
        ],
      },
    ],
  },

  en: {
    headerTitle: "Questions & Answers – Sandbox International School",
    subtitle:
      "Find quick answers about our bilingual program, daily routine and enrollment.",
    searchPlaceholder:
      "Search by keyword (e.g.: bilingual, enrollment)...",
    searchAriaLabel: "Search questions and answers",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    tocAria: "FAQ categories",
    emptyStatePrefix: "No results found for",
    sections: [
      {
        id: "sobre-a-escola",
        title: "About the School",
        items: [
          {
            q: "Is Sandbox a bilingual school in Fortaleza?",
            a: "Yes! Sandbox is a bilingual school in Fortaleza, where children have daily contact with English from nursery through 6th grade.",
          },
          {
            q: "From nursery up to which grade do you offer classes?",
            a: "We welcome students from nursery through the 6th grade of Elementary School, following their growth and whole development.",
          },
          {
            q: "How does the adaptation period for new children work?",
            a: "We promote adaptation in a gradual and welcoming way, respecting each child's pace and involving the family in this process.",
          },
          {
            q: "What makes Sandbox different from other private schools in Fortaleza?",
            a: "Our approach is bilingual, based on active learning, inclusion and partnership with families, forming confident, creative children who are prepared for the future.",
          },
        ],
      },
      {
        id: "ensino-bilingue-e-metodologia",
        title: "Bilingual Education and Methodology",
        items: [
          {
            q: "Do children really learn English in their daily routine?",
            a: "Yes! English is part of our daily routine in activities, games and projects, allowing children to learn naturally.",
          },
          {
            q: "Does Sandbox follow a specific teaching methodology?",
            a: "We work with active learning, encouraging creativity, curiosity and student protagonism at every stage.",
          },
          {
            q: "How do you foster creativity and whole-child development?",
            a: "Through projects and artistic, sports and cultural activities that develop not only academic knowledge but also social-emotional skills.",
          },
        ],
      },
      {
        id: "bercario-e-educacao-infantil",
        title: "Nursery and Early Childhood Education",
        items: [
          {
            q: "Does Sandbox offer nursery in Fortaleza?",
            a: "Yes, we offer a nursery in Fortaleza with a safe, welcoming and bilingual environment for babies from 6 months onwards.",
          },
          {
            q: "How do you care for babies and very young children?",
            a: "We have a specialized team, individualized care routines, healthy meals and a lot of affection.",
          },
          {
            q: "What kinds of educational and play activities are offered in early childhood?",
            a: "We work with music, arts, movement, storytelling and bilingual activities that stimulate whole development.",
          },
        ],
      },
      {
        id: "ensino-fundamental",
        title: "Elementary School",
        items: [
          {
            q: "Do you offer a bilingual Elementary program in Fortaleza?",
            a: "Yes! From 1st to 6th grade, our students have bilingual classes and a curriculum that combines academic knowledge and life skills.",
          },
          {
            q: "How does the school prepare students for future challenges?",
            a: "We encourage critical thinking, creativity, collaboration and English fluency, preparing children for a globalized world.",
          },
          {
            q: "Is there individualized monitoring of learning?",
            a: "Yes! We closely follow each student’s development, ensuring that everyone can progress at their own pace.",
          },
        ],
      },
      {
        id: "estrutura-e-seguranca",
        title: "Facilities and Safety",
        items: [
          {
            q: "Is the school safe? How is entry and exit controlled?",
            a: "Yes, we have safety protocols, access control and a trained team to ensure everyone's well-being.",
          },
          {
            q: "What are the classrooms and social areas like?",
            a: "Our spaces are wide, air-conditioned and designed to stimulate learning and social interaction among children.",
          },
          {
            q: "Do you provide meals at school?",
            a: "Yes, we offer healthy and well-balanced meals specially prepared for children's needs.",
          },
        ],
      },
      {
        id: "matriculas-e-vagas",
        title: "Enrollment and Availability",
        items: [
          {
            q: "How can I schedule a visit to the school?",
            a: "You can schedule a visit through WhatsApp or via our website. It will be a pleasure to welcome your family at Sandbox!",
          },
          {
            q: "Are there spots available for 2026?",
            a: "Yes! Enrollment is open for 2026, from nursery through 6th grade.",
          },
          {
            q: "Does the school offer discounts or special conditions for enrollment?",
            a: "Yes, until September we offer a 35% discount on the first 2026 installment.",
          },
          {
            q: "Until when will enrollment remain open?",
            a: "Enrollment remains open until all spots are filled. We recommend securing your place as soon as possible!",
          },
        ],
      },
    ],
  },
};

function Chevron({ open }) {
  return (
    <svg
      className={`sandbox-faq__chevron ${open ? "is-open" : ""}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function FaqPage() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState({});
  const [query, setQuery] = useState("");

  const texts = FAQ_TEXTS[lang];
  const sections = texts.sections;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((sec) => ({
        ...sec,
        items: sec.items.filter(
          (it) =>
            it.q.toLowerCase().includes(q) ||
            it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [query, sections]);

  const toggle = (secId, idx) => {
    setOpenIndex((prev) => {
      const key = `${secId}-${idx}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  const expandAll = () => {
    const next = {};
    filtered.forEach((s) =>
      s.items.forEach((_, idx) => {
        next[`${s.id}-${idx}`] = true;
      })
    );
    setOpenIndex(next);
  };

  const collapseAll = () => setOpenIndex({});

  return (
    <main className="sandbox-faq">
      <header className="sandbox-faq__header">
        <h1 className="sandbox-faq__title">{texts.headerTitle}</h1>
        <p className="sandbox-faq__subtitle">{texts.subtitle}</p>

        <div className="sandbox-faq__controls">
          <input
            type="search"
            placeholder={texts.searchPlaceholder}
            className="sandbox-faq__search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={texts.searchAriaLabel}
          />
          <div className="sandbox-faq__buttons">
            <button className="sandbox-faq__btn" onClick={expandAll}>
              {texts.expandAll}
            </button>
            <button
              className="sandbox-faq__btn sandbox-faq__btn--ghost"
              onClick={collapseAll}
            >
              {texts.collapseAll}
            </button>
          </div>
        </div>

        <nav
          className="sandbox-faq__toc"
          aria-label={texts.tocAria}
        >
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="sandbox-faq__tocLink">
              {s.title}
            </a>
          ))}
        </nav>
      </header>

      {filtered.length === 0 ? (
        <p className="sandbox-faq__empty">
          {texts.emptyStatePrefix} “{query}”.
        </p>
      ) : null}

      {filtered.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="sandbox-faq__section"
        >
          <h2 className="sandbox-faq__sectionTitle">
            {section.title}
          </h2>
          <ul className="sandbox-faq__list">
            {section.items.map((item, idx) => {
              const key = `${section.id}-${idx}`;
              const isOpen = !!openIndex[key];
              return (
                <li
                  key={key}
                  className={`sandbox-faq__item ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <button
                    className="sandbox-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${key}`}
                    onClick={() => toggle(section.id, idx)}
                  >
                    <span className="sandbox-faq__questionText">
                      {item.q}
                    </span>
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    id={`panel-${key}`}
                    role="region"
                    className="sandbox-faq__answer"
                    aria-hidden={!isOpen}
                  >
                    <p className="sandbox-faq__answerText">
                      {item.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
