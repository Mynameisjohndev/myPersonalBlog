import { darken } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SelectExperienceContainer = styled.div`
  padding-left: 3rem;
  @media (max-width: 950px) {
    padding-left: 0;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.3s all;
  .scroll-row {
    height: 1.7rem;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
    transition: 0.3s all;
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.BLACK_30};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GREEN_30};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => darken(0.04, theme.COLORS.GREEN_30)};
    }
  }

  .scroll-stop {
    transition: 0.3s all;
    display: inline-block;
    scroll-snap-align: start;
    width: 100%;
    height: 100%;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(100%);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms, transform 800ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: 0.3s all;
  .title-experience {
    transition: 0.3s all;
    .column-experience {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: 0.3s all;
    }
    .row-experience {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: 0.3s all;
      h1 {
        text-align: left;
        padding-left: 0.2rem;
        font-size: 1.2rem;
        transition: 0.3s all;
      }
      .green {
        transition: 0.3s all;
        color: ${({ theme }) => theme.COLORS.GREEN_30};
      }
    }
  }
  .description-list {
    overflow-y: auto;
    width: 80%;
    transition: 0.3s all;
    &::-webkit-scrollbar {
      display: none;
    }
    max-height: 180px;
    @media (max-width: 950px) {
      /* max-height: 250px; */
    }
    .description-item {
      margin-top: 0.4rem;
    }
  }
  .subtitle {
    transition: 0.3s all;
    color: ${({ theme }) => theme.COLORS.GREEN_30};
    font-size: 1rem;
  }
  .description-techs {
    transition: 0.3s all;
    margin-top: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    svg {
      transition: 0.3s all;
      width: 30px;
      height: 30px;
      margin-right: 0.7rem;
      @media (max-width: 950px) {
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export { SelectExperienceContainer, ContentRow };
