import ProjectCard from '../../components/ProjectCard/ProjectCard'

import calimind from '../../assets/main/projetos/calimind.png'
import visaoEducada from '../../assets/main/projetos/visao_educada.png'
import fiapClothers from '../../assets/main/projetos/fiap_clothers.png'
import lifeTap from '../../assets/main/projetos/LifeTap.png'
import hc from '../../assets/main/projetos/Site_Solucao_HC.png'
import dpjd from '../../assets/main/projetos/dp.jd.png'
import mrjd from '../../assets/main/projetos/mr.jd.png'
import gsjd from '../../assets/main/projetos/gs.jd.png'
import gqrjd from '../../assets/main/projetos/gqr.jd.png'
import dindin from '../../assets/main/projetos/dindin.png'
import microondas from '../../assets/main/projetos/microondas.png'

function Projetos() {

  const projetos = [
    {
      image: calimind,
      title: "CaliMind",
      site: "https://calimind.vercel.app/",
      code: "https://github.com/ZeDio/CaliMind"
    },
    {
      image: visaoEducada,
      title: "Visão Educada",
      site: "https://zedio.github.io/Visao-Educada/",
      code: "https://github.com/ZeDio/Visao-Educada"
    },
    {
      image: fiapClothers,
      title: "Fiap Clothers",
      site: "https://zedio.github.io/fiapclothers/",
      code: "https://github.com/ZeDio/fiapclothers"
    },
    {
      image: lifeTap,
      title: "Life Tap",
      site: "https://lifetap.vercel.app/",
      code: "https://github.com/AnJoPe/Global-Solution-LifeTAP"
    },
    {
      image: hc,
      title: "Hospital das Clínicas",
      site: "https://hospital-das-clinicas.vercel.app/",
      code: "https://github.com/AnJoPe/Challenge-1TDSA-FrontEnd"
    },
    {
      image: dpjd,
      title: "Diário Pessoal",
      site: "https://dp-jd.vercel.app/",
      code: "https://github.com/ZeDio/Praticando/"
    },
    {
      image: mrjd,
      title: "Minhas Recordações",
      site: "https://pl-jd.vercel.app/Minhas_Recordacoes/index.html",
      code: "https://github.com/ZeDio/Praticando/"
    },
    {
      image: gsjd,
      title: "Gerador De Senhas",
      site: "https://pl-jd.vercel.app/Gerador_De_Senhas/index.html",
      code: "https://github.com/ZeDio/Praticando/"
    },
    {
      image: gqrjd,
      title: "Gerador QR",
      site: "https://pl-jd.vercel.app/Gerador_QR/index.html",
      code: "https://github.com/ZeDio/Praticando/"
    },
    {
      image: dindin,
      title: "Maquina Virtual em Nuvem",
      code: "https://github.com/ZeDio/2TDSA/tree/main/DT%20-%20DevOps%20Tools%20e%20Cloud%20Computing/Aula%202%20-%20CP"
    },
    {
      image: microondas,
      title: "Microondas com Arduino",
      site: "https://wokwi.com/projects/458923641113059329",
      code: "https://github.com/ZeDio/2TDSA/tree/main/AI%20-%20Disruptive%20Architectures%20IoT%20IOB%20e%20Generative%20IA/Aula%205%20-%20CP"
    }
  ]

  return (
    <section className="section-5" id="projetos">
      <h2>Projetos</h2>

      <div className="projetos hidden">
        {projetos.map((proj, index) => (
          <ProjectCard
            key={index}
            image={proj.image}
            title={proj.title}
            site={proj.site}
            code={proj.code}
          />
        ))}
      </div>

      <div className="blur-fundo-2"></div>
    </section>
  )
}

export default Projetos