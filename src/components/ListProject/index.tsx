import { IListProjects } from '../../interfaces/listProjects';
import { CardProject } from '../CardProject';
import { ListProjectContainer } from './styles';

const ListProject: React.FC<IListProjects> = ({ projects }) => {
  return (
    <ListProjectContainer>
      {projects.map((project, key) => {
        return <CardProject {...{ project, key }} />;
      })}
    </ListProjectContainer>
  );
};

export { ListProject };
