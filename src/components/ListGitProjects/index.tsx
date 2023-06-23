/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

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

  const removeCards = () => {
    const filteredCards = displayedCards.filter(card => card.index > 6);
    const reverseFilteredCard = filteredCards.reverse();
    let cards = displayedCards;
    for (let card = 0; card <= reverseFilteredCard.length - 1; card += 1) {
      const { index } = reverseFilteredCard[card];
      setTimeout(() => {
        console.log(reverseFilteredCard[card]);
        cards.splice(index, 1);
        setDisplayedCards(cards.filter(thisCard => thisCard.index !== index));
      }, 400 * card);
      setIsExpanded(false);
    }
  };

  const removeItem = (index: number) => {
    // setDisplayedCards(displayedCards.filter(card => card.index !== index));
  };

  return (
    <ContainerList>
      <AnimatePresence>
        <ListGitProjectsContainer>
          {displayedCards.map((card, key) => {
            return <CardGitProject {...{ card, key, action: removeItem }} />;
          })}
        </ListGitProjectsContainer>
      </AnimatePresence>
      {!isExpanded && (
        <AiFillPlusCircle className="add-more-cards" onClick={addMoreCard} />
      )}
      {/* {isExpanded ? (
        <AiFillMinusCircle className="add-more-cards" onClick={removeCards} />
      ) : (
        <AiFillPlusCircle className="add-more-cards" onClick={addMoreCard} />
      )} */}
    </ContainerList>
  );
};

export { ListGitProjects };
