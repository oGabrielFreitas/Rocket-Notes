// import { RiShutDownLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.header`
  /* grid-area: header; */

  height: 66px;
  width: 100%;
  background-color: #fff;

  box-shadow: ${({ theme }) => theme.SHADOW.LIGHTSHADOW};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;

  /* background: red; */
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 18px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
      font-weight: 500;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 24px;
  }
`;
