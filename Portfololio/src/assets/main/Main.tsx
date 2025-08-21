import { useState, useEffect } from "react";

function Main() {

  const texts = ["- José Diogo", "- JD"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), 50);
    } else {
      timer = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }, 1000);
    }

    setDisplayText(currentText.substring(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <>
       <main id="inicio">
        <section className="section-1">
            <div className="blur-fundo-1"></div>
            <div className="text">
                <h1>
                    Olá! Me chamo..<br/> <h1 id="typing">{displayText}</h1>
                </h1>
                <p>- Sou desenvolvedor Full-Stack, com experiência em criação e edição de sites, além de conhecimentos aprofundados em UX/UI, focando sempre na melhor usabilidade para o usuário.</p>
                
                <a href="#skills">
                    <button>Outras Habilidades</button>
                </a>
            </div>

            <img src="/imgs/main/eu.png" alt="Foto minha"/>
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
            <div className="skills">
                <div className="skill">
                    <img src="/imgs/main/skills/front_end.png" alt="Front End"/>
                    <div className="text_skill">
                        <h3>Front End</h3>
                        <p>Faço interfaces webs utilizando HTML, CSS, REACT com o foco em criação de layouts responsivos e otimizados</p>
                    </div>
                </div>
                <div className="skill">
                    <img src="/imgs/main/skills/back_end.png" alt="Back End"/>
                    <div className="text_skill">
                        <h3>Back End</h3>
                        <p>Desenvolvo sistemas e APIs usando JS, PYTHON e JAVA com meu foco em estruturação lógica e eficiência em soluções robustas</p>
                    </div>
                </div>
                <div className="skill">
                    <img src="/imgs/main/skills/banco_de_dados.png" alt="Banco de Dados"/>
                    <div className="text_skill">
                        <h3>Banco de Dados</h3>
                        <p>Tenho experiência na modelagem e gerenciamento de dados com MySQL, MongoDB e Firebase, realizando a criação de consultas otimizadas</p>
                    </div>
                </div>
                <div className="skill">
                    <img src="/imgs/main/skills/ux_ui.png" alt="UX e UI"/>
                    <div className="text_skill">
                        <h3>UX e UI</h3>
                        <p>Crio wireframes e protótipos no Figma, conduzindo testes com usuários para validar a usabilidade e aprimorar a experiência na ferramenta</p>
                    </div>
                </div>
                <div className="skill">
                    <img src="/imgs/main/skills/desing_visual.png" alt="Desing Visual"/>
                    <div className="text_skill">
                        <h3>Design Visual</h3>
                        <p>Desenvolvo identidades visuais para marcas e projetos, aliando estética e funcionalidade na criação e construção de sites</p>
                    </div>
                </div>
                <div className="skill">
                    <img src="/imgs/main/skills/gerenciamento_de_projetos.png" alt="Gereciamento de Projetos"/>
                    <div className="text_skill">
                        <h3>Gereciamento de Projetos</h3>
                        <p>Já fui líder de alguns projetos como a CALIMIND, liderando equipes e coordenando cronogramas, com foco no planejamento de escopo, prazos e entregas</p>
                    </div>
                </div>
                <div className="blur-fundo-1"></div>
            </div>
        </section>

        <section className="section-4" id="projetos">
            <h2>Projetos</h2>

            <div className="projetos">
                <div className="projeto">
                    <img src="/imgs/main/projetos/calimind.png" alt="CaliMind"/>
                    <div className="info">
                        <h3>CaliMind</h3>
                        <a href="https://calimind.vercel.app/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/ZeDio/CaliMind">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>            
                <div className="projeto">
                    <img src="/imgs/main/projetos/blackcine.png" alt="BlackCine"/>
                    <div className="info">
                        <h3>BlackCine</h3>
                        <a href="https://3-mia.vercel.app/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/ZeDio/3Mia/tree/main/INW%20JS/CineApp/BlackCine">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>        
                <div className="projeto">
                    <img src="/imgs/main/projetos/visao_educada.png" alt="Visão Educada"/>
                    <div className="info">
                        <h3>Visão Educada</h3>
                        <a href="https://zedio.github.io/Visao-Educada/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/ZeDio/Visao-Educada">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>        
                <div className="projeto">
                    <img src="/imgs/main/projetos/fiap_clothers.png" alt="Fiap Clothers"/>
                    <div className="info">
                        <h3>Fiap Clothers</h3>
                        <a href="https://zedio.github.io/fiapclothers/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/ZeDio/fiapclothers?tab=readme-ov-file">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>
                <div className="projeto">
                    <img src="/imgs/main/projetos/LifeTap.png" alt="Life Tap"/>
                    <div className="info">
                        <h3>Life Tap</h3>
                        <a href="https://lifetap.vercel.app/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/AnJoPe/Global-Solution-LifeTAP">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>       
                <div className="projeto">
                    <img src="/imgs/main/projetos/Site_Solucao_HC.png" alt="Site Solução Hospital das Clínicas"/>
                    <div className="info">
                        <h3>Site Solução Hospital das Clínicas</h3>
                        <a href="https://hospital-das-clinicas.vercel.app/">
                            <button>Visitar Site</button>
                        </a>
                        <a href="https://github.com/AnJoPe/Challenge-1TDSA-FrontEnd">
                            <button>Visitar Código</button>
                        </a>
                    </div>
                </div>       
                <div className="blur-fundo-2"></div>
            </div>
        </section>

        <section className="section-5" id="contato">
            <img src="/imgs/main/eu denovo.png" alt="Minha pessoa"/>
            
            <form>
                <h2>Entre em contato</h2>
                <label htmlFor="Email">
                    <h3>- Gmail</h3>
                    <input type="email" name="email" id="email" placeholder="gmail@gmail.com" className="input"/>
                </label>
                <label htmlFor="Mensagem">
                    <h3>- Mensagem</h3>
                    <textarea name="mensagem" id="mensagem" placeholder="Sua mensagem" className="input"></textarea>
                </label>
                <input type="submit" value="Enviar :D" className="button_form"/>
            </form>
            <div className="blur-fundo-1"></div>
        </section>
        
        <section className="section-6" id="redes">
            <h2>Redes Sociais</h2>
            <div className="redes">
                <a href="https://www.instagram.com/ze.dio?igsh=a25tamNxNjhsanl0" className="rede">
                    <img src="/imgs/main/redes/instagram.png" alt="Intagram"/>
                    <div className="text_rede">
                        <h3>Intagram</h3>
                    </div>
                </a>
                <a href="https://github.com/ZeDio" className="rede">
                    <img src="/imgs/main/redes/github.png" alt="Github"/>
                    <div className="text_rede">
                        <h3>GitHub</h3>
                    </div>
                </a>
                <a href="https://youtube.com/@ze__dio?si=IGv3MLn8JBhhveJZ" className="rede">
                    <img src="/imgs/main/redes/youtube.png" alt="Youtube"/>
                    <div className="text_rede">
                        <h3>YouTube</h3>
                    </div>
                </a>
                <a href="
                https://www.linkedin.com/in/jos%C3%A9-diogo-d-33634b280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="rede">
                    <img src="/imgs/main/redes/linkedin.png" alt="LinkedIn"/>
                    <div className="text_rede">
                        <h3>LinkedIn</h3>
                    </div>
                </a>
            </div>
            <div className="blur-fundo-2"></div>
        </section>

        <button className="tema">
            <img src="/imgs/Tema/Sol.png"/>
        </button>
    </main>
    </>
  )
}

export default Main