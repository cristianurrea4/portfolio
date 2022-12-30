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
            Hola, mi nombre es Cristian Urrea. Titulado como Técnico Superior FP
            en Desarrollo de aplicaciones multiplataforma (DAM) y en Desarrollo
            de aplicaciones web (DAW). Trabajé como desarrollador web en el
            sector de los eventos en Barcelona, en Meetmaps.
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
