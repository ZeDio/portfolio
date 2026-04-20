import { useState } from 'react'
import { Link } from 'react-router-dom'

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

import s22ultralPreto_TrocaTampa_1 from '../../assets/main/servicos/s22ultralPreto_TrocaTampa_1.jpg'
import s22ultralPreto_TrocaTampa_2 from '../../assets/main/servicos/s22ultralPreto_TrocaTampa_2.jpg'
import redmi8_trocaDeBateria from '../../assets/main/servicos/redmi8_trocaDeBateria.jpg'
import s22_trocaDaBateria from '../../assets/main/servicos/s22_trocaDaBateria.jpg'
import iphone11pro_trocaDaTela_1 from '../../assets/main/servicos/iphone11pro_trocaDaTela_1.jpg'
import iphone11pro_trocaDaTela_2 from '../../assets/main/servicos/iphone11pro_trocaDaTela_2.jpg'
import a14_trocaDaBateria from '../../assets/main/servicos/a14_trocaDaBateria.jpg'
import a12_trocaDaPlacaDeCarca_E_DaTela_1 from '../../assets/main/servicos/a12_trocaDaPlacaDeCarca_E_DaTela_1.jpg'
import a12_trocaDaPlacaDeCarca_E_DaTela_2 from '../../assets/main/servicos/a12_trocaDaPlacaDeCarca_E_DaTela_2.jpg'
import redmi7_trocaDaBateria_DaCameraFrontal_DaTampaTraseira_E_DoBotaoDeVolume from '../../assets/main/servicos/redmi7_trocaDaBateria_DaCameraFrontal_DaTampaTraseira_E_DoBotaoDeVolume.jpg'
import pocoM6Pro_trocaDaSubPlacaDeCarga_1 from '../../assets/main/servicos/pocoM6Pro_trocaDaSubPlacaDeCarga_1.jpg'
import pocoM6Pro_trocaDaSubPlacaDeCarga_2 from '../../assets/main/servicos/pocoM6Pro_trocaDaSubPlacaDeCarga_2.jpg'


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
  
    const [selectedService, setSelectedService] = useState(null)
    const servicos = [
    {
      image: s22ultralPreto_TrocaTampa_1,
      image_2: s22ultralPreto_TrocaTampa_2,
      title: "Samsung S22 Ultra",
      description: "Tampa Traseira Trincada",
      contact: "/contato"
    },
    {
      image: redmi8_trocaDeBateria,
      image_2: redmi8_trocaDeBateria,
      title: "Xiaomi Redmi Note 8",
      description: "Bateria viciada",
      contact: "/contato"
    },
    {
      image: s22_trocaDaBateria,
      image_2: s22_trocaDaBateria,
      title: "Samsung S22",
      description: "Bateria inchada",
      contact: "/contato"
    },
    {
      image: iphone11pro_trocaDaTela_1,
      image_2: iphone11pro_trocaDaTela_2,
      title: "Iphone 11 Pro",
      description: "Troca da tela",
      contact: "/contato"
    },
    {
      image: a14_trocaDaBateria,
      image_2: a14_trocaDaBateria,
      title: "Samsung A14",
      description: "Troca da bateria viciada",
      contact: "/contato"
    },
    {
      image: a12_trocaDaPlacaDeCarca_E_DaTela_1,
      image_2: a12_trocaDaPlacaDeCarca_E_DaTela_2,
      title: "Samsung A12",
      description: "Troca da sub-placa de carga e da tela",
      contact: "/contato"
    },
    {
      image: redmi7_trocaDaBateria_DaCameraFrontal_DaTampaTraseira_E_DoBotaoDeVolume,
      image_2: redmi7_trocaDaBateria_DaCameraFrontal_DaTampaTraseira_E_DoBotaoDeVolume,
      title: "Xiaomi Redmi Note 7",
      description: "Troca da bateria, camera frontal, tampa traseira e dos botões de volume",
      contact: "/contato"
    },
    {
      image: pocoM6Pro_trocaDaSubPlacaDeCarga_1,
      image_2: pocoM6Pro_trocaDaSubPlacaDeCarga_2,
      title: "Xiaomi Poco M6 Pro",
      description: "Troca da sub-placa de carga",
      contact: "/contato"
    },
  ]

  const [closing, setClosing] = useState(false)
    const handleClose = () => {
      setClosing(true)

      setTimeout(() => {
        setSelectedService(null)
        setClosing(false)
      }, 300)
    }

  return (
    <>
      <section className="section-5" id="projetos">
        <h2>Projetos</h2>
        <div className="blur-fundo-1"></div>

        <div className="projetos hidden">
          {projetos.map((proj, index) => (
            <ProjectCard
              key={index}
              image={proj.image}
              title={proj.title}
              site={proj.site}
              code={proj.code}
              type="projeto"
            />
          ))}
        </div>

        <div className="blur-fundo-2"></div>
      </section>
      <section className="section-5" id="servicos">
        <h2>Serviços</h2>

        <div className="projetos hidden">
          {servicos.map((serv, index) => (
            <ProjectCard
              key={index}
              image={serv.image}
              title={serv.title}
              type="servico"
              onClick={() => setSelectedService(serv)}
            />
          ))}
        </div>
      </section>

      {selectedService && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className={`modal ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <img src={selectedService.image_2}/>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>

            <div className='modal_buttons'>
              <Link to={selectedService.contact}>
                <button>Entrar em Contato</button>
              </Link>

              <button className="outline" onClick={handleClose}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} export default Projetos