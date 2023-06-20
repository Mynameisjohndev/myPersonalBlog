import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContainerList = styled.div`
  align-self: center;
  transition: 0.3s all;

  button {
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
  }
`;

const ListGitProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  width: 1120px;
  transition: 0.3s all;
  @media (max-width: 1220px) {
    width: 840px;
  }
  @media (max-width: 950px) {
    width: 560px;
  }
  @media (max-width: 660px) {
    width: 280px;
  }

  .card {
    margin: auto;
    width: 250px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_60};
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    transition: 0.3s all;
    &:hover {
      /* margin-bottom: 0.4rem; */
      transform: scaleX(1.1);
      width: 240px;
      height: 240px;
    }
  }
`;

export { ListGitProjectsContainer, ContainerList };
