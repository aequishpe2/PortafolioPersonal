import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/firebase.png";
import projImg2 from "../assets/img/clinica.png";
import projImg3 from "../assets/img/azure.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  const projects = [
    {
      title: "Inventario",
      description: "Inventario de almacenamiento de productos.",
      imgUrl: projImg1,
    },
    {
      title: "Sistema de Clínica",
      description: "Sistema de gestión de clínica médica.",
      imgUrl: projImg2,
    },
    {
      title: "Clínica",
      description: "Deployment de un sitio web en Azure.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>He desarrollado proyectos con las siguientes tecnologías</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {["first", "second", "third"].map((key, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={key}>Modulo {index + 1}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {["first", "second", "third"].map((key, index) => (
                        <Tab.Pane eventKey={key} key={index}>
                          {key === "first" ? (
                            <Row>
                              {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            </Row>
                          ) : (
                            <p>Proyectos a desarrollar próximamente.</p>
                          )}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};

export default Projects;
