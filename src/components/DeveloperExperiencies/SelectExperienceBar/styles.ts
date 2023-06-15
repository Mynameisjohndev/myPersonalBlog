import styled from 'styled-components';

const ContainerSelectExperienceBar = styled.div`
  width: 70%;
  height: 20px;
  border-radius: 12.5px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_10};
  transition: 0.3s all;
  display: flex;
  margin: 2rem;
  align-items: center;

  .select {
    height: 25px;
    width: 70px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
    position: absolute;
    cursor: pointer;
  }
`;

export { ContainerSelectExperienceBar };
