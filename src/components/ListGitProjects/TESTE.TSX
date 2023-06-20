import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, config } from 'react-spring';

import { ListGitProjectsContainer } from './styles';

const ListGitProjects = () => {
  const [cards, setCards] = useState([
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 5', description: 'Description 5' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 7', description: 'Description 7' },
    { title: 'Card 8', description: 'Description 8' },
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const removeCard = (index: number) => {
    setCards(cards.filter((card, i) => i !== index));
  };

  return (
    <ListGitProjectsContainer ref={ref}>
      {cards.map((t, key) => {
        const props = useSpring({
          to: { opacity: inView ? 1 : 0 },
          from: { opacity: 0 },
          config: config.molasses,
          delay: 100 * key,
        });
        return (
          <animated.div
            className="card"
            key={key}
            style={props}
            onClick={() => removeCard(key)}
          >
            {t.title}
          </animated.div>
        );
      })}
    </ListGitProjectsContainer>
  );
};

export { ListGitProjects };
