/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { IListCardGitProject } from '../../interfaces/cardGitProject';
import { CardGitProject } from '../CardGitProject';
import { ContainerList, ListGitProjectsContainer } from './styles';

const ListGitProjects: React.FC<IListCardGitProject> = ({ projects }) => {
  const [cards, setCards] = useState(projects);

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
      {/* <button onClick={addItem}>Adicionar Item</button>
      <button onClick={sortItems}>Ordenar Itens</button> */}
      <AnimatePresence>
        <ListGitProjectsContainer>
          {cards.map((card, key) => {
            return <CardGitProject {...{ card, key }} />;
          })}
        </ListGitProjectsContainer>
      </AnimatePresence>
    </ContainerList>
  );
};

export { ListGitProjects };
