import { useEffect, useState } from 'react'
import eu from '../../assets/main/eu.png'
import frontend from '../../assets/main/skills/front_end.png'
import backend from '../../assets/main/skills/back_end.png'
import banco_de_dados from '../../assets/main/skills/banco_de_dados.png'
import ux_ui from '../../assets/main/skills/ux_ui.png'
import desing_visual from '../../assets/main/skills/desing_visual.png'
import gerenciamento_de_Projetos from '../../assets/main/skills/gerenciamento_de_projetos.png'

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
    </>
  )
}

export default Home