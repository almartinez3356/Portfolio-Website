import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Aside from computational thinking, which is what I find most important when doing anything in tech, my relevant coursework includes the following:
                                 - COSC 1336 Fundamentals of Programming 1 (Python)
- COSC 1337 Programming Fundamentals 2 (C++)
- COSC 2436 Data Structures and Algorithms (C++)
- ITNW 1325 Fundamentals of Networking Technologies (Linux)
- ITSC 1307 Unix Operating System 1 (Unix/Linux)
- ITSE 1311 Beginning Web Programming </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Software Engineering</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}