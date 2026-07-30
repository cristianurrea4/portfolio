import Card from "../../components/Card";
import data from "./data";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos Destacados</h2>
      <p>Algunos de mis últimos trabajos como desarrollador frontend:</p>
      <div className="container projects__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="project">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project__preview"
              style={{ background: item.gradient }}
              aria-label={`Abrir ${item.title} en una nueva pestaña`}
            >
              <span className="project__preview-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <HiOutlineGlobeAlt className="project__preview-icon" />
            </a>

            <div className="project__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <div className="project__tech">
                {item.tech.map((tech) => (
                  <span key={tech} className="project__badge">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary project__btn"
              >
                Ver proyecto <FiExternalLink />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
