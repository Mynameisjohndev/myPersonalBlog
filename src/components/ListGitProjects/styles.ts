import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContainerList = styled.div`
  align-self: center;
  button {
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
  }
`;

const ListGitProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 1030px;
  @media (max-width: 1220px) {
    /* width: 840px; */
    width: 770px;
  }
  @media (max-width: 950px) {
    /* width: 560px; */
    width: 510px;
  }
  @media (max-width: 660px) {
    /* width: 280px; */
    width: 250px;
  }
`;

export { ListGitProjectsContainer, ContainerList };
