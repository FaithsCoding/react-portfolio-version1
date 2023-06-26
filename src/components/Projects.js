import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projectImage1 from '../assets/images/project-img1.png';
import projectImage2 from '../assets/images/project-img2.png';
import projectImage3 from '../assets/images/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'This was an app created for our first group project.',
      imageUrl: projectImage1,
    },
    {
      title: 'The Sequel',
      description: 'This was an app created for our second group project.',
      imageUrl: projectImage2,
    },
    {
      title: 'Developer Blog',
      description: 'This was an app created for one of my assignments.',
      imageUrl: projectImage3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} md={4}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
