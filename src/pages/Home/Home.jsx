import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import eu from '../../assets/main/eu.png'
import frontend from '../../assets/main/skills/front_end.png'
import backend from '../../assets/main/skills/back_end.png'
import banco_de_dados from '../../assets/main/skills/banco_de_dados.png'
import ux_ui from '../../assets/main/skills/ux_ui.png'
import desing_visual from '../../assets/main/skills/desing_visual.png'
import gerenciamento_de_Projetos from '../../assets/main/skills/gerenciamento_de_projetos.png'
import java from '../../assets/main/linguagens/java.png'
import js from '../../assets/main/linguagens/js.png'
import python from '../../assets/main/linguagens/python.png'
import csharp from '../../assets/main/linguagens/csharp.png'
import cmaismais from '../../assets/main/linguagens/cmaismais.png'
import html from '../../assets/main/linguagens/html.png'
import css from '../../assets/main/linguagens/css.png'
import react from '../../assets/main/linguagens/react.png'
import mysql from '../../assets/main/linguagens/mysql.png'
import oraclesql from '../../assets/main/linguagens/oracleSQL.png'
import firebase from '../../assets/main/linguagens/firebase.png'

function Home() {
  const texts = [" José Diogo", " JD"]

  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const currentText = texts[index]

    let timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100)
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } 
    else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting)

        if (!isDeleting) {
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  return (
    <>
      <section className="section-1 hidden" id="inicio">
        <div className="blur-fundo-1"></div>

        <div className="text">
          <h1>
            Olá! Me chamo..<br />
            <span>- {text}</span>
          </h1>

          <p>
            - Sou desenvolvedor Full-Stack, com experiência em criação e edição
            de sites, além de conhecimentos aprofundados em UX/UI, focando
            sempre na melhor usabilidade para o usuário.
          </p>

          <a href="#skills">
            <button>Outras Habilidades</button>
          </a>
          <Link to="/contato" className="contato">
            <button>Entre em contato</button>
          </Link>
        </div>

        <img src={eu} alt="Foto minha" />
      </section>

    <section className="section-2" id="sobre">
            <h2>Sobre</h2>

            <div className="texts">
                <p>Minha jornada com a tecnologia começou em 2019, quando vi um amigo desenvolvendo um site. Aquilo despertou minha curiosidade, e logo começei a me interessar cada vez mais pela área de design e front-end. Durante o ensino médio, tive a oportunidade de estudar na FIAP School, onde consegui construir uma base sólida e me aprofundar no universo da tecnologia.</p>
                <p>Hoje, meu foco principal é o front-end, área pela qual sou realmente apaixonado. Ainda assim, venho explorando o back-end aos poucos, percebendo como ele amplia minhas possibilidades na criação de sistemas e ferramentas úteis para resolver problemas reais.</p>
                <p>No meu TCC do ensino médio, desenvolvemos a CALIMIND — uma experiência incrível onde pude colocar minhas habilidades de front-end em prática, além de contribuir com o básico no back-end. Porém, o maior desafio (e também o mais enriquecedor) foi liderar a equipe, coordenando o projeto e garantindo que tudo seguisse conforme o planejado.</p>
            </div>
            <div className='texts'>
                <p>Além do desenvolvimento, também comecei a me interessar pela parte prática da tecnologia, explorando hardware e manutenção por conta própria. Em 2023, montei meu primeiro computador sozinho, o que me permitiu entender melhor sobre componentes, compatibilidade e organização.</p>
                <p>No ano seguinte, em 2024, dei um passo além e comecei a trabalhar com manutenção de celulares. Meu primeiro conserto foi em um Samsung S10 Plus, onde realizei a troca da tampa traseira e do botão de power, experiência que marcou o início dessa nova área de atuação.</p>
                <p>Desde então, venho evoluindo tanto no desenvolvimento de software quanto na parte de hardware, buscando sempre ampliar meus conhecimentos e me tornar um profissional mais completo, capaz de atuar em diferentes frentes da tecnologia.</p>
            </div>
            <div className="blur-fundo-2"></div>
        </section>

        <section className="section-3" id="skills">
            <h2>Skills</h2>
            <div className="skills hidden">
                <div className="skill hidden">
                    <img src={frontend} alt="Front End" />
                    <div className="text_skill">
                        <h3>Front End</h3>
                        <p>Faço interfaces webs utilizando HTML, CSS, REACT com o foco em criação de layouts responsivos e otimizados</p>
                    </div>
                </div>
                <div className="skill hidden">
                    <img src={backend} alt="Back End" />
                    <div className="text_skill">
                        <h3>Back End</h3>
                        <p>Desenvolvo sistemas e APIs usando JS, PYTHON e JAVA com meu foco em estruturação lógica e eficiência em soluções robustas</p>
                    </div>
                </div>
                <div className="skill hidden">
                    <img src={banco_de_dados} alt="Banco de Dados" />
                    <div className="text_skill">
                        <h3>Banco de Dados</h3>
                        <p>Tenho experiência na modelagem e gerenciamento de dados com MySQL, MongoDB e Firebase, realizando a criação de consultas otimizadas</p>
                    </div>
                </div>
                <div className="skill hidden">
                    <img src={ux_ui} alt="UX e UI" />
                    <div className="text_skill">
                        <h3>UX e UI</h3>
                        <p>Crio wireframes e protótipos no Figma, conduzindo testes com usuários para validar a usabilidade e aprimorar a experiência na ferramenta</p>
                    </div>
                </div>
                <div className="skill hidden">
                    <img src={desing_visual} alt="Desing Visual" />
                    <div className="text_skill">
                        <h3>Design Visual</h3>
                        <p>Desenvolvo identidades visuais para marcas e projetos, aliando estética e funcionalidade na criação e construção de sites</p>
                    </div>
                </div>
                <div className="skill hidden">
                    <img src={gerenciamento_de_Projetos} alt="Gereciamento de Projetos" />
                    <div className="text_skill">
                        <h3>Gereciamento de Projetos</h3>
                        <p>Já fui líder de alguns projetos como a CALIMIND, liderando equipes e coordenando cronogramas, com foco no planejamento de escopo, prazos e entregas</p>
                    </div>
                </div>
                <div className="blur-fundo-1"></div>
            </div>
        </section>

        <section className="section-4" id="linguagens">
          <h2>Tecnologias e Linguagens Utilizadas</h2>

          <h3 className="titulo_categoria">Linguagens</h3>
          <div className="blur-fundo-2"></div>
          <div className="linguagens hidden">
            <div className="linguagem hidden">
              <img src={java} alt="Java" />
              <div className="text_linguagem">
                <h3>Java</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={js} alt="JavaScript" />
              <div className="text_linguagem">
                <h3>JavaScript</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={python} alt="Python" />
              <div className="text_linguagem">
                <h3>Python</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={csharp} alt="C#" />
              <div className="text_linguagem">
                <h3>C#</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={cmaismais} alt="C++" />
              <div className="text_linguagem">
                <h3>C++</h3>
              </div>
            </div>
          </div>

          <h3 className="titulo_categoria">Front-end</h3>
          <div className="blur-fundo-1"></div>
          <div className="linguagens hidden">
            <div className="linguagem hidden">
              <img src={html} alt="HTML" />
              <div className="text_linguagem">
                <h3>HTML</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={css} alt="CSS" />
              <div className="text_linguagem">
                <h3>CSS</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={react} alt="react" />
              <div className="text_linguagem">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <h3 className="titulo_categoria"> Banco de Dados</h3>
          <div className="linguagens hidden">
            <div className="linguagem hidden">
              <img src={mysql} alt="MySQL" />
              <div className="text_linguagem">
                <h3>MySQL</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={oraclesql} alt="Oracle SQL" />
              <div className="text_linguagem">
                <h3>Oracle SQL</h3>
              </div>
            </div>

            <div className="linguagem hidden">
              <img src={firebase} alt="Firebase" />
              <div className="text_linguagem">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

        </section>
    </>
  )
}

export default Home