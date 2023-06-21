/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AiFillFolder, AiFillGithub } from 'react-icons/ai';

import { ContainerList, ListGitProjectsContainer } from './styles';

const cardVariants = {
  // hidden: { opacity: 0, y: 50 },
  // show: { opacity: 1, y: 0 },
  // exit: { opacity: 0, y: -50 },
};

const ListGitProjects = () => {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
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

  const addItem = () => {
    // setCards([...cards, Math.max(...cards) + 1]);
  };

  // const removeItem = (index: number) => {
  //   setCards(cards.filter((cards, i) => i !== index));
  // };

  const sortItems = () => {
    // setCards([...cards].sort((a, b) => b - a));
  };

  return (
    <ContainerList>
      <button onClick={addItem}>Adicionar Item</button>
      <button onClick={sortItems}>Ordenar Itens</button>
      <AnimatePresence>
        <ListGitProjectsContainer>
          {cards.map((card, index) => {
            const { title } = card;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                layoutDependency={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
                className="card"
              >
                <div className="column">
                  <div className="title">
                    <AiFillFolder />
                    <AiFillGithub className="showingit" />
                  </div>
                  <div className="content">
                    <h1>{title}</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam nihil autem optio.
                    </p>
                  </div>
                </div>
                <div className="footer">
                  <span>React</span>
                  <span>Typescript</span>
                </div>
              </motion.div>
            );
          })}
        </ListGitProjectsContainer>
      </AnimatePresence>
    </ContainerList>
  );
};

export { ListGitProjects };
