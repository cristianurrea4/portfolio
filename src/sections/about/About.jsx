import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>Acerca de mí</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hola, mi nombre es Cristian Urrea. Soy Programador Full Stack con experiencia en desarrollo web, análisis de datos y soporte técnico. He trabajado en
            sectores como el sociosanitario, asegurador, eventos y gestión empresarial. En GDR desarrollé soluciones web para la gestión de
            residencias utilizando PHP (Laravel), JavaScript y SQL Server. En Melmacia apliqué modelos de machine learning para
            predecir el churn en seguros, y en Egaraset optimicé un ERP desarrollado en Delphi. En Meetmaps participé en proyectos Full
            Stack aplicando Angular, TypeScript y arquitecturas modulares con lazy loading y servicios reutilizables, además de principios
            SOLID y metodologías ágiles. Comprometido con la mejora continua, la calidad del software y la resolución de incidencias.
          </p>
          <a href={CV} download className="btn primary">
            Descargar CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
