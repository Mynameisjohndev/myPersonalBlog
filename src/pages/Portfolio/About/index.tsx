import photo from '../../../assets/photo.png';
import { Social } from '../../../components/Social';
import { ContainerAboutPage } from './styles';

const About = () => {
  return (
    <ContainerAboutPage>
      <div className="container-description">
        <div className="column-description">
          <h2>Olá, meu nome é</h2>
          <h1>João Antônio</h1>
          <p>
            Sou desenvolvedor Full Stack a mais de 4 anos, atualmente trabalho
            na{' '}
            <a href="https://www.webmeta.com.br" target="_blank">
              Meta Tecnologia e Sistemas Ltda
            </a>{' '}
            no cargo de Full Stack e também na{' '}
            <a href="https://severustech.netlify.app" target="_blank">
              SeverusTech
            </a>{' '}
            onde ocupo este cargo e também sou fundador.
          </p>
          <Social />
        </div>
      </div>
      <img className="user_profile_photo" src={photo} draggable="false" />
    </ContainerAboutPage>
  );
};

export { About };
