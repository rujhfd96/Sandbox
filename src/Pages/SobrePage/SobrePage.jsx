import './SobrePage.css';
import HeroImg from "../../../public/IMAGENS/classroom-5-1920x680.jpg";
import AdrianaImg from '../../../public/IMAGENS/Adriana.png'
import nossaMissao from '../../../public/IMAGENS/sandboxs.jpeg'

function SobrePage(){
    return(
        <main>
           <section
                   className="hero2"
                   style={{ backgroundImage: `url(${HeroImg})` }}
                   aria-label="Sala de aula com crianças"
                 >
                    <h1>Sobre a Sandbox</h1>
                   
            </section>
            <section className='features2'>
                <div className="features__band2" >
                    <h1>Nossa escola</h1>
                </div>
                <div className='container_mae'>
                    <img src={AdrianaImg} alt='Foto da diretora'/>
                    <div className='container_texto_4'>
                        <h2>Sejam bem vindos a SandBox!</h2>
                        <p>A Sandbox International School nasceu com um propósito diferente: mostrar que aprender pode ser uma aventura cheia de descobertas. Desde os primeiros meses de vida até o 7º ano do Ensino Fundamental, nossos alunos crescem em um ambiente bilíngue que integra o melhor
                             dos dois mundos: português no período da manhã e inglês no período da tarde. Assim, o domínio de uma segunda língua acontece de forma natural, leve e diária, sem peso, como parte da rotina.
                            Nosso espaço é um capítulo à parte. Diferente das escolas convencionais, a Sandbox foi planejada para que as crianças vivam experiências completas. Temos uma área ampla, aberta e cheia de 
                            vida, onde brincar e aprender se misturam. Há piscina para os dias de sol, gramados que convidam à corrida e ao jogo, e até áreas de areia que estimulam a criatividade e a imaginação. Cada canto foi pensado para acolher, desafiar e divertir, transformando a escola em um lugar onde a criança se sente livre, segura e feliz.
                            Mais do que cadeiras e lousas, acreditamos em cenários que incentivam a curiosidade. Ao invés de limitar, abrimos horizontes: nossos clubes e atividades extracurriculares prolongam a experiência para além do horário regular, conectando aprendizado com prazer. A Sandbox é, acima de tudo, um espaço que une afeto, inovação e educação de qualidade — preparando cidadãos globais, mas também crianças plenas, que sabem brincar, conviver e sonhar.
                            </p>
                    </div>
                </div>
                <h3>Adriana Franklin<br/>Diretora da escola</h3>
            </section>
            <section className='nossa_missao'>
                <div className='nossa_missao_content'>
                    <img src={nossaMissao} alt='imagem aluna sandbox'/>
                    <div className='cima-baixo2'>
                        <h3>Nossa missão</h3>
                        <p>Na Sandbox International School, nossa missão é formar crianças bilíngues, seguras e felizes, preparadas para enfrentar um mundo em constante mudança sem abrir mão da infância. Acreditamos que aprender deve ser leve, divertido e significativo, por isso unimos o ensino de qualidade em português e inglês com um ambiente acolhedor, cheio de natureza, movimento e descobertas.
                            Mais do que transmitir conteúdos, buscamos despertar a curiosidade, a autonomia e o respeito ao pr
                            óximo. Queremos que cada aluno se sinta parte de uma comunidade que valoriza tanto o conhecimento quanto os valores 
                            humanos.
                            Nosso compromisso é acompanhar cada etapa do desenvolvimento, da 
                            primeira infância até o Ensino Fundamental, oferecendo experiências que unem cultura, criatividade e inovação. Na Sandbox, educar é preparar para a vida — com alegria, confiança e a certeza de que aqui cada criança encontra espaço para crescer em todas as dimensões.
                        </p>
                    </div>
                </div>
            </section>
            <section className="valores">
  <div className="valores_content">
    <h2>Nossos Valores</h2>
    <div className="valores_grid">
      
      <div className="valor_card">
        <h3>Imersão Bilíngue</h3>
        <p>Na Sandbox, as crianças não apenas aprendem português e inglês — elas vivem os dois idiomas no dia a dia. Essa imersão natural amplia a agilidade cognitiva, a compreensão cultural e a comunicação global.</p>
      </div>

      <div className="valor_card">
        <h3>Comunidade</h3>
        <p>Acreditamos na força da comunidade escolar. Alunos, famílias e equipe caminham juntos, em um ambiente de respeito, apoio e cooperação, onde todos se sentem acolhidos e pertencentes.</p>
      </div>

      <div className="valor_card">
        <h3>Cidadania Global</h3>
        <p>Preparamos nossos alunos para serem cidadãos do mundo. Respeito, empatia e colaboração são cultivados diariamente, formando crianças capazes de compreender diferentes culturas e atuar positivamente em qualquer lugar.</p>
      </div>

      <div className="valor_card">
        <h3>Desenvolvimento Integral</h3>
        <p>Mais do que conteúdos, cuidamos do crescimento pleno das crianças: acadêmico, emocional, social e criativo. Queremos formar indivíduos seguros, éticos e preparados para os desafios da vida.</p>
      </div>

    </div>
  </div>
</section>
        </main>
    )
}

export default SobrePage;