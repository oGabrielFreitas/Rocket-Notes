// import { RiShutDownLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0 10px 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  border-radius: 10px;

  border-top: 3px solid ${({ theme }) => theme.COLORS.PURPLE};

  box-shadow: ${({ theme }) => theme.SHADOW.LIGHT_SHADOW};

  display: flex;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  > table {
    width: 100%;
    border: solid 1px red;
  }

  h2 {
    font-size: 16px;
  }
`;
