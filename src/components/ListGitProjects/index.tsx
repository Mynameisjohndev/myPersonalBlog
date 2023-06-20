import { ListGitProjectsContainer } from './styles';

const ListGitProjects = () => {
  const cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
  ];

  return (
    <ListGitProjectsContainer>
      {cards.map((t, key) => {
        return <div className="card" key={key}></div>;
      })}
    </ListGitProjectsContainer>
  );
};

export { ListGitProjects };
