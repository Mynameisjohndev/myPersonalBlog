import Ilustration from '../../../assets/fullstack.svg';
import SelectExperience, {
  IExperience,
} from '../../../components/SelectExperience';
import { ContainerExperiencePage } from './styles';

const Experiencies = () => {
  const sections: IExperience[] = [
    {
      ocupation: 'Desenvolvedor Mobile',
      company: 'iNova NY',
      city: 'Itaperuna, RJ',
      office: 'Estagiário',
      date: 'Setembro 2020 - Dezembro 2020',
      techs: ['react', 'react-native', 'insomnia', 'github'],
      description: [
        '· Encarregado em criar novas features e fazer correções no aplicativo da empresa que era um gerenciador de projeto, onde o era possível acompanhar o progresso de cada funcionário em suas tarefas.',
        '· Tive a oportunidade de estudar e aprender na pratica react e react native, assim como ajudar em correções em landing pages que eram feitas em WordPress.',
      ],
    },
    {
      ocupation: 'Desenvolvedor Full Stack',
      company: 'UniRedentor',
      city: 'Itaperuna, RJ',
      office: 'Estagiário',
      date: 'Fevereiro 2021 - Dezembro 2021',
      techs: ['react', 'insomnia', 'github', 'firebase'],
      description: [
        '· Desenvolvimento de um sistema para gerenciamento de prontuários para os alunos do curso de psicologia, para que eles pudessem realizar seus atendimentos via web e passar tudo que era de papel para digital',
      ],
    },
    {
      ocupation: 'Desenvolvedor Mobile',
      company: 'Mestres da Web',
      city: 'Mogi das Cruzes, SP',
      office: 'Júnior',
      date: 'Janeiro 2022 - Abril 2022',
      techs: ['react-native', 'insomnia', 'github'],
      description: [
        '· Encarregado em criar novas features e fazer correções no aplicativo da empresa que era um gerenciador de projeto, onde o era possível acompanhar o progresso de cada funcionário em suas tarefas.',
        '· Tive a oportunidade de estudar e aprender na pratica react e react native, assim como ajudar em correções em landing pages que eram feitas em WordPress.',
      ],
    },
    {
      ocupation: 'Desenvolvedor Full Stack',
      company: 'Spotx',
      city: 'Vitória, ES',
      office: 'Pleno',
      date: 'Abril 2022 - Julho 2022',
      techs: [
        'react',
        'react-native',
        'nodejs',
        'typescript',
        'mapbox',
        'insomnia',
        'github',
        'firebase',
      ],
      description: [
        '· Criação de novas funcionalidades no painel administrativo feito em, que visa exibir o progresso do frete realizado pelo caminhoneiro assim como poder visualizar outros dados.',
        '· Criação e correção de funcionalidades no app feito em React Native usado para controlar o andamento da viagem do caminhoneiro.',
        '· Criação de novas funcionalidades no backend feito em Node.Js que faz toda essa comunicação de aplicativo e painel.',
        '. Desenvolvimento de novos layouts para o app e para o painel.',
        '· Utilização de GitHub para versionamento dos projetos.',
        '· Deploy automático das aplicações através do GitHub.',
        '· Utilização da metodologia scrum',
      ],
    },
    {
      ocupation: 'Desenvolvedor Full Stack',
      company: 'SeverusTech ',
      city: 'Muriaé, MG',
      office: 'Sênior',
      date: 'Julho 2022 - até o momento',
      techs: [
        'react',
        'react-native',
        'nodejs',
        'nestjs',
        'typescript',
        'insomnia',
        'github',
        'firebase',
        'supabase',
        'mongo',
        'mysql',
        'postgres',
      ],
      description: [
        '· Criação de novas funcionalidades no painel administrativo feito em, que visa exibir o progresso do frete realizado pelo caminhoneiro assim como poder visualizar outros dados.',
        '· Criação e correção de funcionalidades no app feito em React Native usado para controlar o andamento da viagem do caminhoneiro.',
        '· Criação de novas funcionalidades no backend feito em Node.Js que faz toda essa comunicação de aplicativo e painel.',
        '. Desenvolvimento de novos layouts para o app e para o painel.',
        '· Utilização de GitHub para versionamento dos projetos.',
        '· Deploy automático das aplicações através do GitHub.',
        '· Utilização da metodologia scrum',
        '· Aplicações criada: site para lanchonete, site para ascensorista juntamente de um painel administrativo e painel da propria empresa para gerenciamento dos clientes.',
      ],
    },
    {
      ocupation: 'Desenvolvedor Full Stack',
      company: 'Meta Tecnologia E Sistemas Ltda ',
      city: 'Muriaé, MG',
      office: 'Sênior',
      date: 'Outubro 2022 - até o momento',
      techs: [
        'react',
        'react-native',
        'nodejs',
        'typescript',
        'insomnia',
        'github',
        'mysql',
      ],
      description: [
        '· Desenvolvimento de aplicações web',
        '· Desenvolvimento de aplicações mobile',
        '· Desenvolvimento de backend',
        '· Utilização do figma para desenvolvimento de layout.',
        '· Utilização do github para versionamento do código.',
        '· Utilização do mapbox para fazer a exibição de mapas em tempo real',
        '· Aplicação construída: Aplicativo de coleta de leite para carreteiro, painel para empresa acompanhar todas informações do andamento da coleta assim como informações gerais da própria empresa e API de autenticação com conexão dinâmica de banco de dados, onde a API pode usar as informações de autenticação fornecidas pelo usuário para determinar qual banco de dados acessar.',
      ],
    },
  ];
  return (
    <ContainerExperiencePage id="experience">
      <div className="column-experience">
        <h1 className="page-title">Experiências</h1>
        <SelectExperience sections={sections} />
      </div>
      <img draggable="false" src={Ilustration} className="ilustration" />
    </ContainerExperiencePage>
  );
};

export { Experiencies };
