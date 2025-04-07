import { Link } from "react-router-dom";
import projects from "../assets/projects.json";

import "../assets/styles/Projects.scss";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="projects_title">MES PROJETS</h1>
      <div className="projects_list">
        {projects.projects.map((elem, i) => (
          <article
            className="project"
            data-aos="fade-right"
            key={elem.h4}
            id={i}
          >
            <div className="project_title_container">
              <h2 className="project_title"> {elem.h4}</h2>
              <span className="project_techno">{elem.techno}</span>
            </div>
            <div className="project_informations">
              <p className="project_description">{elem.p}</p>
            </div>
            <Link to={elem.link} className="project_img-container">
              <img
                className="project_img"
                src={"/Img" + elem.img}
                alt={"Aperçu du site : " + elem.h4}
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
