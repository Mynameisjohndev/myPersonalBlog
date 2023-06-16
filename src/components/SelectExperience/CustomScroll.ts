import { darken } from 'polished';
import styled from 'styled-components';

const SelectExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;

  .scroll-row {
    height: 2rem;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
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
    display: inline-block;
    scroll-snap-align: start;
    width: 100%;
    height: 100%;
  }
`;

const ContentRow = styled.div`
  flex: 2;
  min-height: 85%;
  max-height: 85%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  .title-experience {
    width: 100%;
    .column-experience {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .row-experience {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      h1 {
        padding-left: 0.2rem;
        font-size: 1.4rem;
      }
      .green {
        color: ${({ theme }) => theme.COLORS.GREEN_30};
      }
    }
  }
`;

export { SelectExperienceContainer, ContentRow };
