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
            Hola, mi nombre es Cristian Urrea. Soy un programador con más de 4 años de experiencia en desarrollo web y análisis de datos. 
            Cuento con una titulación como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones Web (DAW). 
            Durante mi trayectoria, he trabajado en distintos sectores, destacando mi rol en Meetmaps como desarrollador Full Stack en el sector de eventos, 
            donde implementé soluciones en frontend y backend. También he trabajado en Egaraset S.L., donde desarrollé soluciones en Delphi 11, 
            optimicé bases de datos en SQL Server y brindé soporte técnico a clientes.  
            Además, tengo experiencia en el sector asegurador, aplicando machine learning para el análisis de datos y predicción de churn en Melmacia.  
            Me apasiona la tecnología y el aprendizaje continuo, siempre buscando mejorar mis habilidades para aportar valor en cada proyecto en el que participo.
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
