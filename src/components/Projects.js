import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
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
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                  arrows
                  autoPlaySpeed={3000}
                  slidesToSlide={1}
                  swipeable
                >
                  {projects.map((project, index) => (
                    <div key={index} className="item">
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
