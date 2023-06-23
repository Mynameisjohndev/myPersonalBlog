import { AiFillFolder, AiFillGithub } from 'react-icons/ai';

import { IDataCardGitProject } from '../../interfaces/cardGitProject';
import { CardGitProjectContainer } from './styles';

const CardGitProject = ({ card, action }: IDataCardGitProject) => {
  const { description, title, techs, index } = card;
  const cardVariants = {
    // hidden: { opacity: 0, y: 50 },
    // show: { opacity: 1, y: 0 },
    // exit: { opacity: 0, y: -50 },
  };
  return (
    <CardGitProjectContainer
      onClick={() => action(index)}
      variants={cardVariants}
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
          <AiFillGithub className="showingit" />
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
