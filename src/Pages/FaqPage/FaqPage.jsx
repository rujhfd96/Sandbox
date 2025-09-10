// src/pages/FaqPage.jsx
import { useMemo, useState } from "react";
import "./FaqPage.css";

const SECTIONS = [
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
        a: "Sim, oferecemos berçário em Fortaleza com ambiente seguro, acolhedor e bilíngue para bebês a partir dos 4 meses.",
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
];

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
  const [openIndex, setOpenIndex] = useState({});
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS.map((sec) => ({
      ...sec,
      items: sec.items.filter(
        (it) =>
          it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
      ),
    })).filter((sec) => sec.items.length > 0);
  }, [query]);

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
        <h1 className="sandbox-faq__title">
          Perguntas e Respostas – Sandbox International School
        </h1>
        <p className="sandbox-faq__subtitle">
          Encontre aqui respostas rápidas sobre nossa proposta bilíngue, rotina e
          matrículas.
        </p>

        <div className="sandbox-faq__controls">
          <input
            type="search"
            placeholder="Buscar por palavra-chave (ex.: bilíngue, matrícula)..."
            className="sandbox-faq__search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar perguntas e respostas"
          />
          <div className="sandbox-faq__buttons">
            <button className="sandbox-faq__btn" onClick={expandAll}>
              Expandir tudo
            </button>
            <button
              className="sandbox-faq__btn sandbox-faq__btn--ghost"
              onClick={collapseAll}
            >
              Recolher tudo
            </button>
          </div>
        </div>

        <nav className="sandbox-faq__toc" aria-label="Categorias do FAQ">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="sandbox-faq__tocLink">
              {s.title}
            </a>
          ))}
        </nav>
      </header>

      {filtered.length === 0 ? (
        <p className="sandbox-faq__empty">
          Nenhum resultado encontrado para “{query}”.
        </p>
      ) : null}

      {filtered.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="sandbox-faq__section"
        >
          <h2 className="sandbox-faq__sectionTitle">{section.title}</h2>
          <ul className="sandbox-faq__list">
            {section.items.map((item, idx) => {
              const key = `${section.id}-${idx}`;
              const isOpen = !!openIndex[key];
              return (
                <li
                  key={key}
                  className={`sandbox-faq__item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    className="sandbox-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${key}`}
                    onClick={() => toggle(section.id, idx)}
                  >
                    <span className="sandbox-faq__questionText">{item.q}</span>
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    id={`panel-${key}`}
                    role="region"
                    className="sandbox-faq__answer"
                    aria-hidden={!isOpen}
                  >
                    <p className="sandbox-faq__answerText">{item.a}</p>
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
