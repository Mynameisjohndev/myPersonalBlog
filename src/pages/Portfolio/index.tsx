import { Header } from '../../components/Header';
import { Column } from '../../global/styles';
import { About } from './About';
import { Experiencies } from './Experiencies';

const Portfolio = () => {
  return (
    <Column>
      <Header />
      <About />
      <Experiencies />
    </Column>
  );
};

export { Portfolio };
