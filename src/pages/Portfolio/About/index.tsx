import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { TypeAnimation } from 'react-type-animation';

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
  const [showName, setShowName] = useState(false);

  return (
    <ContainerAboutPage id="about">
      <div className="container-description">
        <div className="column-description">
          <animated.div style={props}>
            <h2>
              <TypeAnimation
                cursor={false}
                sequence={['Olá, meu nome é', 0, () => setShowName(true), 0]}
                wrapper="span"
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 130 }}
              />
            </h2>
            {showName && (
              <h1>
                <TypeAnimation
                  cursor={false}
                  sequence={['João Antônio', 0]}
                  wrapper="span"
                  repeat={0}
                  speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                />
              </h1>
            )}
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
              ocupando o mesmo cargo e também sou fundador.
            </p>
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
