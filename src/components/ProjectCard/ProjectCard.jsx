function ProjectCard({ image, title, site, code }) {
  return (
    <div className="projeto">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <div className="buttons">
          {site && (
            <a href={site} target="_blank" rel="noreferrer">
              <button>Visitar Site</button>
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noreferrer">
              <button className="outline">Código</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard