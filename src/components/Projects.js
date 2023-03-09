import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PROJECTPIC1.PNG"
import projImg2 from "../assets/img/FIFO.png"
import projImg3 from "../assets/img/LINKEDLIST.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Classes and Objects",
      description: "Advance knowledge of classes, header files, objects, compiling, and version control - GitHub repo: https://github.com/ACC-Computer-Science-Spring-2023/classes-and-objects-almartinez3356",
      imgUrl: projImg1,
    },
    {
      title: "Stacks",
      description: "Expand knowledge of stacks, pass by reference, pointers, and structs, following best practices - GitHub repo: https://github.com/ACC-Computer-Science-Spring-2023/stack-almartinez3356",
      imgUrl: projImg2,
    },
    {
      title: "Doubly Linked Lists",
      description: "Create a proper interface and implementation for a linked list that passes all the tests using best practices - GitHub repo: https://github.com/ACC-Computer-Science-Spring-2023/linked-lists-almartinez3356",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Feel free to explore my projects and their associated github repos!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data structures</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Client-server programming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">FrontEnd development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing here yet, but maybe my first project in this area can be for you!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I will soon link this current website under this section!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}