import { motion } from 'framer-motion';
import { transparentize } from 'polished';
import styled from 'styled-components';

const CardGitProjectContainer = styled(motion.div)`
  align-self: center;
  width: 300px;
  height: 300px;
  @media (max-width: 550px) {
    width: 230px;
    height: 230px;
  }
  background-color: ${({ theme }) => theme.COLORS.BLACK_60};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.4rem;
  padding: 0.4rem;
  overflow-x: auto;
  &:hover {
    /* transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); */
    .content {
      h1 {
        transition: 0.3s all;
        color: ${({ theme }) => theme.COLORS.GREEN_30};
      }
    }
    .showingit {
      svg {
        transition: 0.3s all;
        fill: ${({ theme }) => theme.COLORS.GREEN_30};
      }
    }
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  .column {
    transition: 0.3s all;
    display: flex;
    flex-direction: column;
  }
  .title {
    transition: 0.3s all;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    a {
      transition: 0.3s all;
      text-decoration: none;
    }
    svg {
      transition: 0.3s all;
      width: 40px;
      height: 40px;
      fill: white;
    }
    .showingit {
      transition: 0.3s all;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s all;
      /* width: 140px;
      span {
        transition: 0.3s all;
        display: none;
        transition: 0.3s all;
        color: #fff;
      }
      &:hover {
        span {
          display: flex;
        }
      } */
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: 0.3s all;
    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: 0.3s all;
      font-size: 1.2rem;
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
    flex-wrap: wrap;
    span {
      margin: 0.15rem;
      font-size: 0.6rem;
      color: ${({ theme }) => transparentize(0.6, theme.COLORS.WHITE)};
      &:hover {
        transition: 0.3s all;
        color: ${({ theme }) => theme.COLORS.GREEN_30};
      }
    }
  }
`;

export { CardGitProjectContainer };
