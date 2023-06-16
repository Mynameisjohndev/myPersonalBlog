import Ilustration from '../../../assets/fullstack.svg';
import SelectExperience, {
  IExperience,
} from '../../../components/SelectExperience';
import { ContainerExperiencePage } from './styles';

const Experiencies = () => {
  const sections: IExperience[] = [
    {
      ocupation: 'Desenvolvedor mobile',
      company: 'iNova NY',
      office: 'Estagiário',
      date: 'Setembro - Dezembro 2020',
      techs: ['react', 'react-native', 'insomnia', 'github'],
      description: [
        '· Encarregado em criar novas features e fazer correções no aplicativo da empresa que era um gerenciador de projeto, onde o era possível acompanhar o progresso de cada funcionário em suas tarefas.',
        '· Tive a oportunidade de estudar e aprender na pratica react e react native, assim como ajudar em correções em landing pages que eram feitas em WordPress.',
      ],
    },
    {
      ocupation: 'Desenvolvedor mobile',
      company: 'Mestres da Web',
      office: 'Desenvolvedor Júnior',
      date: 'Janeiro - Abril 2022',
      techs: ['react-native', 'insomnia', 'github'],
      description: [
        '· Encarregado em criar novas features e fazer correções no aplicativo da empresa que era um gerenciador de projeto, onde o era possível acompanhar o progresso de cada funcionário em suas tarefas.',
        '· Tive a oportunidade de estudar e aprender na pratica react e react native, assim como ajudar em correções em landing pages que eram feitas em WordPress.',
      ],
    },
  ];
  return (
    <ContainerExperiencePage>
      <div className="column-experience">
        <h1>Experiências</h1>
        <SelectExperience sections={sections} />
      </div>
      <img draggable="false" src={Ilustration} className="ilustration" />
    </ContainerExperiencePage>
  );
};

export { Experiencies };
