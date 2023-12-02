// import { RiShutDownLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 20px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

    padding-bottom: 5px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 20px;
    font-weight: 500;
  }
`;
