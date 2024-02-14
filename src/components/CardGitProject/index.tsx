import { AiFillFolder, AiFillGithub } from 'react-icons/ai';

import { IDataCardGitProject } from '../../interfaces/cardGitProject';
import { CardGitProjectContainer } from './styles';

const CardGitProject = ({ card }: IDataCardGitProject) => {
  const { description, title, techs, link } = card;
  return (
    <CardGitProjectContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      layoutDependency={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
      className="card"
    >
      <div className="column">
        <div className="title">
          <AiFillFolder />
          <a href={link} target="_blank" className="showingit">
            <AiFillGithub />
            {/* <span>Acessar</span> */}
          </a>
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="footer">
        {techs.map((tech, key) => (
          <span {...{ key }}>{tech}</span>
        ))}
      </div>
    </CardGitProjectContainer>
  );
};

export { CardGitProject };
