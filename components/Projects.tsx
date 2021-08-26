import Image from 'next/image';
import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

type ProjectProps = {
  description: string;
  image: any;
  images: any[];
  techs?: string[];
  name: string;
  url?: string;
};

// const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
//   return (
//     <Carousel>
//       {images.map(image => (
//         <div key={image}>
//           <img src={image} />
//           <p className="legend">Legend 1</p>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

const ProjectItem: React.FC<ProjectProps> = ({
  description,
  image,
  // images,
  name,
  techs,
  url,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Image
        src={image}
        alt="cyber purr"
        className="image rounded-full"
        width="100%"
        height="100%"
      />
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
        <h4>{description}</h4>
        {techs.map(tech => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
      {/* <ImageCarousel images={images} /> */}
    </div>
  );
};

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          key={project.name}
          description={project.description}
          image={project.image}
          images={project.images}
          techs={project.techs}
          url={project.url}
          name={project.name}
        />
      ))}
    </div>
  );
};

export default Projects;
