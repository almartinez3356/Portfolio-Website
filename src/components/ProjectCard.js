import React, { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Col lg={4} md={6}>
      <div
        className="project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imgUrl} alt={title} className="project-card-img" />
        {hovered && (
          <div className="overlay">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
    </Col>
  );
};
