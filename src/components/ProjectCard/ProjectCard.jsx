function ProjectCard({ image, title, site, code }) {
  return (
    <div className="projeto">
      <img src={image} alt={title} />

      <div className="info">
        <h3>{title}</h3>

        <div className="buttons">
          <a href={site} target="_blank">
            <button>Visitar Site</button>
          </a>

          <a href={code} target="_blank">
            <button className="outline">Código</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard