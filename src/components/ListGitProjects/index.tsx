/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

import { IListCardGitProject } from '../../interfaces/cardGitProject';
import { CardGitProject } from '../CardGitProject';
import { ContainerList, ListGitProjectsContainer } from './styles';

const ListGitProjects: React.FC<IListCardGitProject> = ({ projects }) => {
  const [displayedCards, setDisplayedCards] = useState(projects.slice(0, 6));
  const [isExpanded, setIsExpanded] = useState(false);

  const addMoreCard = () => {
    setIsExpanded(true);
    setDisplayedCards(projects.slice(0, 12));
  };

  return (
    <ContainerList>
      <AnimatePresence>
        <ListGitProjectsContainer>
          {displayedCards.map((card, key) => {
            return <CardGitProject {...{ card, key }} />;
          })}
        </ListGitProjectsContainer>
      </AnimatePresence>
      {!isExpanded && (
        <AiFillPlusCircle className="add-more-cards" onClick={addMoreCard} />
      )}
    </ContainerList>
  );
};

export { ListGitProjects };
