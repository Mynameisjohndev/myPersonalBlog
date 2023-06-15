import styled, { css } from 'styled-components';

const ContainerHeader = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  li {
    list-style: none;
    margin-right: 3rem;
    ${({ theme }) => css`
      color: ${theme.COLORS.WHITE};
      font-weight: bold;
    `}
  }
  position: fixed;
  top: 0;
  @media (max-height: 550px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export { ContainerHeader };