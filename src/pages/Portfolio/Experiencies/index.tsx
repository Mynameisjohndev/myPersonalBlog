import Ilustration from '../../../assets/fullstack.svg';
import { DeveloperExperiencies } from '../../../components/DeveloperExperiencies';
import { ContainerExperiencePage } from './styles';

const Experiencies = () => {
  return (
    <ContainerExperiencePage>
      <div className="column-experience">
        <h1>Experiências</h1>
        <DeveloperExperiencies />
      </div>
      <img draggable="false" src={Ilustration} className="ilustration" />
    </ContainerExperiencePage>
  );
};

export { Experiencies };
