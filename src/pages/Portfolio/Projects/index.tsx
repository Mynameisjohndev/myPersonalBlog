import { ListProject } from '../../../components/ListProject';
import data from '../../../utils/projects.json';
import { ContainerProjects } from './styles';

const Projects = () => {
  return (
    <ContainerProjects>
      <h1>Algumas coisas que desenvolvi</h1>
      <ListProject {...{ projects: data.projects }} />
    </ContainerProjects>
  );
};

export { Projects };
