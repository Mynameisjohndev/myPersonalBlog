/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ICardProject } from '../../interfaces/project';
import { returnProjectImage } from '../../utils/returnProjectImage';
import { CardProjectContainer } from './styles';

const CardProject: React.FC<ICardProject> = ({ project }) => {
  const { description, image, index, link, title, techs } = project;
  const isEven = index % 2 === 0;
  return (
    <CardProjectContainer
      {...{ index }}
      // data-aos="fade-up"
      // data-aos={`${isEven ? 'fade-left' : 'fade-right'}`}
      // data-aos={`${isEven ? 'fade-right' : 'fade-left'}`}
      // data-aos-duration="1000"
    >
      <div className="column-project">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} target="_blank">
          <button>Visite já</button>
        </a>
      </div>
      <div className="column-image">
        <h1 className="mobile-title">{title}</h1>
        <div className="container-image">
          <img src={returnProjectImage(image!)} />
          <div className="overlay-image"></div>
        </div>
        <div className="row-techs">
          {techs?.map(tech => {
            return <span>{tech}</span>;
          })}
        </div>
      </div>
    </CardProjectContainer>
  );
};

export { CardProject };
