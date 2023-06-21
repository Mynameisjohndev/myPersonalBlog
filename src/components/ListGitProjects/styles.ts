import { motion } from 'framer-motion';
import { transparentize } from 'polished';
import styled from 'styled-components';

const ContainerList = styled.div`
  align-self: center;
  /* transition: 0.3s all; */

  button {
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
  }
`;

const ListGitProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 1030px;
  /* transition: 0.3s all; */
  @media (max-width: 1220px) {
    width: 770px;
    /* width: 840px; */
  }
  @media (max-width: 950px) {
    width: 510px;
    /* width: 560px; */
  }
  @media (max-width: 660px) {
    width: 250px;
  }

  .card {
    /* border: 0.1px solid
      ${({ theme }) => transparentize(0.9, theme.COLORS.WHITE)}; */
    margin: auto;
    width: 250px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_60};
    height: 250px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 0.4rem;
    padding: 1rem;
    .column {
      display: flex;
      flex-direction: column;
    }
    .title {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      svg {
        width: 40px;
        height: 40px;
      }
      .showingit {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      transition: 0.3s all;
      &:hover {
        h1 {
          color: ${({ theme }) => theme.COLORS.GREEN_30};
        }
      }
      h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        font-size: 0.7rem;
        width: 100%;
        color: ${({ theme }) => transparentize(0.5, theme.COLORS.WHITE)};
      }
    }
    .footer {
      display: flex;
      flex-direction: row;

      span {
        margin: 0.3rem;
        font-size: 0.6rem;
        color: ${({ theme }) => transparentize(0.6, theme.COLORS.WHITE)};
      }
    }
    &:hover {
      /* -webkit-box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.4); */
    }
  }
`;

export { ListGitProjectsContainer, ContainerList };
