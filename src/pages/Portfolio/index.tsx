import { Header } from '../../components/Header';
import { Column } from '../../global/styles';
import { About } from './About';
import { Contact } from './Contact';
import { Experiencies } from './Experiencies';
import { Projects } from './Projects';

const Portfolio = () => {
  return (
    <Column>
      <Header />
      <About />
      <Experiencies />
      <Projects />
      <Contact />
    </Column>
  );
};

export { Portfolio };
