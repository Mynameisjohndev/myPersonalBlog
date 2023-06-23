import { ListGitProjects } from '../../../components/ListGitProjects';
import { ListProject } from '../../../components/ListProject';
import datagit from '../../../utils/gitprojects.json';
import data from '../../../utils/projects.json';
import { ContainerProjects } from './styles';

const Projects = () => {
  return (
    <ContainerProjects>
      <h1>Algumas coisas que desenvolvi</h1>
      <ListProject {...{ projects: data.projects }} />
      <h1>Outros projetos notáveis</h1>
      <ListGitProjects {...{ projects: datagit.projects }} />
    </ContainerProjects>
  );
};

export { Projects };
