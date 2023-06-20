import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { IProject } from '../../interfaces/project';

const CardProjectContainer = styled.div<IProject>`
  display: flex;
  width: 80%;
  flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
  justify-content: space-between;
  margin-bottom: 2rem;
  align-self: center;
  transition: 0.3s all;

  .align-project {
    width: 100%;
    display: flex;
  }

  .column-project {
    transition: 0.3s all;
    display: flex;
    flex-direction: column;
    width: 450px;
    /* padding-left: 1rem; */
    p {
      transition: 0.3s all;
      width: 80%;
    }
    h1 {
      transition: 0.3s all;
      color: ${({ theme }) => theme.COLORS.GREEN_30};
      @media (max-width: 1000px) {
        display: none;
      }
    }
    button {
      transition: 0.3s all;
      height: 40px;
      width: 100px;
      border: 0;
      margin-top: 0.4rem;
      border-radius: 0.2rem;
      ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        background-color: ${theme.COLORS.GREEN_30};
        &:hover {
          background-color: ${darken(0.1, theme.COLORS.GREEN_30)};
        }
      `}
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 750px) {
      p {
        font-size: 0.7rem;
      }
      h1 {
        font-size: 1.4rem;
        @media (max-width: 1000px) {
          /* display: none; */
        }
      }
      button {
      }
    }
  }
  .column-image {
    ${({ index }) =>
      index % 2 === 0
        ? css`
            margin-left: 1rem;
          `
        : css`
            margin-right: 1rem;
          `}

    .mobile-title {
      display: none;
      transition: 0.3s all;
      color: ${({ theme }) => theme.COLORS.GREEN_30};
      @media (max-width: 1000px) {
        display: flex;
      }
      @media (max-width: 400px) {
        font-size: 1rem;
      }
    }
    transition: 0.3s all;
    display: flex;
    flex-direction: column;
    .container-image {
      transition: 0.3s all;
      position: relative;
      display: inline-block;
      width: 450px;
      height: 250px;
      @media (max-width: 1110px) {
        width: 350px;
      }
      /* @media (max-width: 1110px) {
        width: 350px;
      } */
      @media (max-width: 600px) {
        height: 30%;
      }
      @media (max-width: 400px) {
        width: 100%;
      }
    }
    .overlay-image {
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.COLORS.GREEN_30};
      opacity: 0.6;
      transition: 0.3s all;
      border-radius: 0.6rem;
      width: 100%;
      height: 100%;
      &:hover {
        background-color: transparent;
      }
    }
    img {
      border-radius: 0.6rem;
      width: 100%;
      height: 100%;
      transition: 0.3s all;
    }
    .row-techs {
      transition: 0.3s all;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    span {
      transition: 0.3s all;
      margin-right: 0.6rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    @media (max-width: 1000px) {
      margin: 0;
      span {
        font-size: 0.7rem;
      }
    }
  }
`;

export { CardProjectContainer };
