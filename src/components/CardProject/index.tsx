/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ICardProject } from '../../interfaces/project';
import { returnProjectImage } from '../../utils/returnProjectImage';
import { CardProjectContainer } from './styles';

const CardProject: React.FC<ICardProject> = ({ project }) => {
  const { description, image, index, link, title, techs } = project;
  return (
    <CardProjectContainer {...{ index }}>
      {/* <div className="align-project"> */}
      <div className="column-project">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} target="_blank">
          <button>Visite já</button>
        </a>
      </div>
      <div className="column-image">
        <img src={returnProjectImage(image!)} />
        <div className="row-techs">
          {techs?.map(tech => {
            return <span>{tech}</span>;
          })}
        </div>
      </div>
      {/* </div> */}
    </CardProjectContainer>
  );
};

export { CardProject };
