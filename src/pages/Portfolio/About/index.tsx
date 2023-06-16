import { useSpring, animated, config } from 'react-spring';

import photo from '../../../assets/photo.png';
import { Social } from '../../../components/Social';
import { ContainerAboutPage } from './styles';

const About = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: config.molasses,
    delay: 1000,
  });
  return (
    <ContainerAboutPage>
      <div className="container-description">
        <div className="column-description">
          <animated.div style={props}>
            <h1>João Antônio</h1>
            {/* <p>
                Sou desenvolvedor Full Stack a mais de 4 anos, atualmente
                trabalho na{' '}
                <a href="https://www.webmeta.com.br" target="_blank">
                  Meta Tecnologia e Sistemas Ltda
                </a>{' '}
                no cargo de Full Stack e também na{' '}
                <a href="https://severustech.netlify.app" target="_blank">
                  SeverusTech
                </a>{' '}
                ocupando o mesmo cargo e também sou fundador.
              </p> */}
            {/* </Typist> */}
            <Social />
          </animated.div>
        </div>
      </div>
      <animated.img
        style={props}
        className="user_profile_photo"
        src={photo}
        draggable="false"
      />
    </ContainerAboutPage>
  );
};

export { About };
