import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { ContainerList, ListGitProjectsContainer } from './styles';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const ListGitProjects = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const addItem = () => {
    setItems([...items, Math.max(...items) + 1]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const sortItems = () => {
    setItems([...items].sort((a, b) => b - a));
  };

  return (
    <ContainerList>
      <button onClick={addItem}>Adicionar Item</button>
      <button onClick={sortItems}>Ordenar Itens</button>
      <AnimatePresence>
        <ListGitProjectsContainer>
          {items.map((item, index) => (
            <motion.div
              key={item}
              variants={cardVariants}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              layout
              layoutDependency={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="card"
            >
              <p>{item}</p>
              <button onClick={() => removeItem(index)}>Remover</button>
            </motion.div>
          ))}
        </ListGitProjectsContainer>
      </AnimatePresence>
    </ContainerList>
  );
};

export { ListGitProjects };
