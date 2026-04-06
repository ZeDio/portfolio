import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import eu_denovo from '../../assets/main/eu denovo.png'
import instagram from '../../assets/main/redes/instagram.png'
import github from '../../assets/main/redes/github.png'
import youtube from '../../assets/main/redes/youtube.png'
import linkedIn from '../../assets/main/redes/linkedin.png'

function Contato() {
  const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'portfolio_email',
        'template_vauwy7a',
        form.current,
        'rSo5eoZW8hj0xAR-F'
    )
    .then(() => {
        toast.success('Email enviado com sucesso!')
        form.current.reset()
    })
    .catch(() => {
        toast.error('Erro ao enviar email')
    })
    }

  return (
    <>
    <section className="section-6 hidden" id="contato">
        <img src={eu_denovo} alt="Minha pessoa"/>
        
        <form ref={form} onSubmit={sendEmail}>
          <h2>Entre em contato</h2>

          <label>
            <h3>- Nome</h3>
            <input 
                type="text"
                name="name"
                placeholder="Seu nome"
                className="input"
                required
            />
          </label>

          <label>
            <h3>- Gmail</h3>
            <input 
              type="email" 
              name="email"   // IMPORTANTE
              placeholder="gmail@gmail.com" 
              className="input" 
              required
            />
          </label>

          <label>
            <h3>- Mensagem</h3>
            <textarea 
              name="message"  // IMPORTANTE
              placeholder="Sua mensagem" 
              className="input"
              required
            ></textarea>
          </label>

          <input type="submit" value="Enviar :D" className="button_form" />
        </form>

        <div className="blur-fundo-1"></div>
      </section>
        
        <section className="section-7" id="redes">
            <h2>Redes Sociais</h2>
            <div className="redes">
                <a href="https://www.instagram.com/ze.dio?igsh=a25tamNxNjhsanl0" className="rede">
                    <img src={instagram} alt="Intagram" />
                    <div className="text_rede">
                        <h3>Intagram</h3>
                    </div>
                </a>
                <a href="https://github.com/ZeDio" className="rede">
                    <img src={github} alt="Github" />
                    <div className="text_rede">
                        <h3>GitHub</h3>
                    </div>
                </a>
                <a href="https://youtube.com/@ze__dio?si=IGv3MLn8JBhhveJZ" className="rede">
                    <img src={youtube} alt="Youtube" />
                    <div className="text_rede">
                        <h3>YouTube</h3>
                    </div>
                </a>
                <a href="
                https://www.linkedin.com/in/jos%C3%A9-diogo-d-33634b280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="rede">
                    <img src={linkedIn} alt="LinkedIn" />
                    <div className="text_rede">
                        <h3>LinkedIn</h3>
                    </div>
                </a>
            </div>
            <div className="blur-fundo-2"></div>
        </section>

        <ToastContainer position="top-right" autoClose={5000} className="meu-toast"/>
    </>
  )
}

export default Contato