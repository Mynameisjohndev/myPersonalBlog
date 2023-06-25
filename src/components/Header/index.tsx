import './services';
import { ContainerHeader } from './styles';

const Header = () => {
  return (
    <ContainerHeader id="navbar">
      <a href="#about">Sobre</a>
      <a href="#experience">Experiências</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </ContainerHeader>
  );
};

export { Header };
