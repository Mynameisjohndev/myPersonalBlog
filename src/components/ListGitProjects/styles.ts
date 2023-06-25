import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContainerList = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  button {
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
  }
  .add-more-cards {
    align-self: center;
    color: #fff;
    width: 3rem;
    height: 3rem;
    margin-top: 1.5rem;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const ListGitProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 10px;
  width: 1070px;
  @media (max-width: 1220px) {
    width: 710px;
  }
  @media (max-width: 860px) {
    width: 350px;
  }
  @media (max-width: 550px) {
    width: 250px;
  }
`;

export { ListGitProjectsContainer, ContainerList };
