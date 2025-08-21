function Header() {

  return (
    <>
      <header>
        <div className="logo">
            <img src="/imgs/logo/logo JD.png" alt="Simbolo"/>
        </div>

        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
        </nav>

        <a href="#contato">
            <button>Contato</button>
        </a>
    </header>
    </>
  )
}

export default Header