import { SiAdobexd, SiPython, SiTensorflow } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { FcMultipleDevices } from "react-icons/fc";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "Diseños modernos e intuitivos y responsivas para diferentes dispositivos.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Utilización de las tecnologías (HTML, CSS, JavaScript) y los frameworks más destacado como (Angular, React, Vue) y otros como (jQuery)",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: `Utilización de las tecnologías (<span>.ASP <span class='mini-badge'>New</span>, PHP) y los frameworks como (<span>Laravel 11/12 <span class='mini-badge'>New</span></span>, Ruby on Rails, NodeJs) y de uso de base de datos (relacionadas: SQL Server y MySQL, no relacionadas: MongoDB)`,
  },  
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "App Development",
    desc: "Utilización de las tecnologías (Android con Java  y iOS con Swift)",
  },
  {
    id: 5,
    icon: <FcMultipleDevices />,
    title: "Multi-Device",
    desc: "Utilización de Delphi 11 y generación de facturas con Quickreport y Fastresport VCL",
  },
  {
    id: 6,
    icon: <SiPython />,
    title: "Python Development",
    desc: "Desarrollo de aplicaciones y análisis de datos utilizando Python, con experiencia en proyectos de inteligencia artificial y machine learning. Manejo de diversas herramientas y tecnologías (Python, Flask, Pandas, NumPy, SQLAlchemy, Matplotlib, Jira). Experiencia en manipulación y procesamiento de datos en múltiples formatos (JSON, CSV, Excel) y en el uso de datasets de Kaggle. Implementación de modelos de entrenamiento (Linear Regression, Random Forest, Decision Tree, K-Nearest Neighbors, Support Vector Machines), y evaluación de modelos con métricas (Mean Squared Error, R^2).",
  },
  {
    id: 7,
    icon: <SiTensorflow />,
    title: "Machine Learning & AI",
    desc: "Implementación de modelos de machine learning con scikit-learn, XGBoost, LightGBM y TensorFlow. Análisis y procesamiento de datos con técnicas avanzadas. Evaluación de modelos con métricas como ROC AUC, F1-score y Recall.",
  }
];

export default data;
