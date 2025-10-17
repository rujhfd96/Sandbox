import "./SobrePage.css";
import HeroImg from "../../../public/IMAGENS/principal.jpg";
import AdrianaImg from "../../../public/IMAGENS/Adriana.png";
import nossaMissao from "../../../public/IMAGENS/missao2.jpg";
import filosofiaImg from "../../../public/IMAGENS/filosofia2.jpg";

function SobrePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="hero2"
        style={{ backgroundImage: `url(${HeroImg})` }}
        aria-label="Sala de aula com crianças"
      >
        <h1>Sobre a Sandbox</h1>
      </section>

      {/* NOSSA ESCOLA */}
      <section className="features2">
        <div className="features__band2">
          <h1>Nossa Escola</h1>
        </div>

        <div className="container_mae">
          <img src={AdrianaImg} alt="Foto da diretora" />
          <div className="container_texto_4">
            <h2>Sejam bem-vindos à Sandbox!</h2>
            <p>
              A Sandbox International School nasceu com um propósito diferente:
              mostrar que aprender pode ser uma aventura cheia de descobertas.
              Desde os primeiros meses de vida até os 12 anos, nossos alunos
              crescem em um ambiente bilíngue que integra o melhor dos dois
              mundos — português e inglês — com leveza e naturalidade.
            </p>
            <p>
              Nossa escola foi planejada para oferecer experiências completas.
              Temos áreas amplas, piscina, gramados e espaços de areia que
              estimulam a imaginação e o movimento. Cada canto foi pensado para
              acolher e desafiar as crianças, promovendo aprendizado e alegria.
            </p>
          </div>
        </div>
        <h3>
          Adriana Franklin
          <br />
          Diretora da escola
        </h3>
      </section>

      {/* NOSSA MISSÃO */}
      <section className="nossa_missao">
        <div className="nossa_missao_content">
          <img src={nossaMissao} alt="Imagem aluna Sandbox" />
          <div className="cima-baixo2">
            <h3>Nossa Missão</h3>
            <p>
              O objetivo da Sandbox International School é promover, em parceria
              com os pais, a qualidade de experiência individual da criança até
              os doze anos. A primeira infância é fundamental para a formação
              integral, e por isso oferecemos um programa cuidadosamente
              planejado em um ambiente repleto de estímulos.
            </p>
            <p>
              Nesse espaço, as crianças aprendem a conviver, compartilhar,
              ajudar umas às outras, trabalhar em grupo e “sonhar em voz alta”.
              Nosso ambiente é seguro, saudável e alegre, onde o aprendizado
              acontece por meio de experiências reais, descobertas e admiração.
            </p>
            <p>
              Queremos que cada criança tenha boas lembranças de sua infância e
              que nossos profissionais se orgulhem de contribuir para esse
              crescimento. É nossa responsabilidade fazer o que é certo para as
              crianças — e aceitamos esse compromisso com mente aberta e desejo
              constante de melhorar.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSA FILOSOFIA */}
<section className="nossa_filosofia">
  <div className="nossa_filosofia_content">
    <img src={filosofiaImg} alt="Crianças aprendendo na Sandbox" />
    <div className="nossa_filosofia_texto">
      <h3>Nossa Filosofia</h3>
      <p>
        Nossa filosofia educacional foi construída com base na experiência
        e no conhecimento. Consideramos todos os aspectos da criança —
        social, intelectual e físico. Acreditamos que a escola e as
        famílias são parceiras na educação, e queremos que os pais se
        sintam acolhidos e compreendidos.
      </p>
      <p>
        As crianças aprendem brincando, com as mãos nas experiências.
        Devem poder se sujar, explorar, inventar e descobrir. A brincadeira
        é a forma mais pura de aprendizado e desenvolve criatividade,
        empatia e imaginação.
      </p>
      <p>
        Nosso papel é proporcionar um ambiente divertido e criativo, livre
        de pressões adultas, onde cada criança possa se desenvolver em seu
        próprio ritmo, aprendendo com alegria e confiança.
      </p>
    </div>
  </div>
</section>


      {/* VALORES */}
      <section className="valores">
        <div className="valores_content">
          <h2>Nossos Valores</h2>
          <div className="valores_grid">
            <div className="valor_card">
              <h3>Imersão Bilíngue</h3>
              <p>
                As crianças vivem o português e o inglês diariamente. Essa
                imersão amplia a agilidade cognitiva, o respeito cultural e a
                comunicação global.
              </p>
            </div>

            <div className="valor_card">
              <h3>Comunidade</h3>
              <p>
                Acreditamos na força da comunidade escolar. Alunos, famílias e
                equipe caminham juntos com respeito, apoio e cooperação.
              </p>
            </div>

            <div className="valor_card">
              <h3>Cidadania Global</h3>
              <p>
                Preparamos cidadãos do mundo com empatia, ética e colaboração,
                capazes de atuar positivamente em qualquer cultura.
              </p>
            </div>

            <div className="valor_card">
              <h3>Desenvolvimento Integral</h3>
              <p>
                Cultivamos o crescimento acadêmico, emocional, social e
                criativo, formando indivíduos confiantes e felizes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SobrePage;
