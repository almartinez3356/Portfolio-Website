export const Projects = () => {
    const projects = [
          {
            title: "Project 1",
            description: "Project 1 description",
            imgUrl: projImg1,
          },
          {
            title: "Project 2",
            description: "Project 2 description",
            imgUrl: projImg1,
          },
          {
            title: "Project 3",
            description: "Project 3 description",
            imgUrl: projImg1,
          },
          {
            title: "Project 4",
            description: "Project 4 description",
            imgUrl: projImg1,
          },
          {
            title: "Project 5",
            description: "Project 5 description",
            imgUrl: projImg1,
          },
          {
            title: "Project 6",
            description: "Project 6 description",
            imgUrl: projImg1,
          },

        ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Tab 3
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <p>{project.title}</p>

                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">LoremIpsum</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}