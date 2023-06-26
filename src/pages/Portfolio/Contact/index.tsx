import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { SiBuymeacoffee } from 'react-icons/si';

import ilustration from '../../../assets/contact.svg';
import { ContainerAboutPage } from './styles';

const Contact = () => {
  return (
    <ContainerAboutPage id="contact">
      {/* <div className="align-contact-info"> */}
      <img src={ilustration} className="contact-ilustration" />
      <div className="contact-info">
        <p>
          Fique a vontade para entrar em contato comigo, não prometo respostas
          rápidas, pois estarei codando!
        </p>
        <div className="row-contacts">
          <a
            href="https://www.linkedin.com/in/joaoantoniodeveloper/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:joao.antonio.developer@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </div>
        <a
          href="https://www.paypal.com/donate/?business=QJ7VXWHBG2MTA&no_recurring=0&currency_code=BRL"
          target="_blank"
          className="button-buy-coffe"
        >
          <button>
            <SiBuymeacoffee />
            Buy-me a coffe!
          </button>
        </a>
      </div>
      {/* </div> */}
    </ContainerAboutPage>
  );
};

export { Contact };
