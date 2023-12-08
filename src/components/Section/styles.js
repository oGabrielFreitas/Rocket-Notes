// import { RiShutDownLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  margin-bottom: 40px;

  .title-section-title {
    display: flex;
    align-items: baseline;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

    padding-bottom: 5px;
    margin-bottom: 24px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 20px;
      font-weight: 500;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      margin-right: 8px;
    }
  }
`;
