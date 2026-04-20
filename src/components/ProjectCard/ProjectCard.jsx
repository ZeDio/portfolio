function ProjectCard({ image, title, site, code, type, onClick }) {
  return (
    <div className="projeto">
      <img src={image} alt={title} />

      <div className="info">
        <h3>{title}</h3>

        <div className="buttons">
          {/* PROJETOS */}
          {type === "projeto" && site && (
            <a href={site} target="_blank" rel="noreferrer">
              <button>Visitar Site</button>
            </a>
          )}

          {type === "projeto" && code && (
            <a href={code} target="_blank" rel="noreferrer">
              <button className="outline">Código</button>
            </a>
          )}

          {/* SERVIÇO */}
          {type === "servico" && (
            <button onClick={onClick}>Ver mais</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard