import styled from 'styled-components';
import { ITheme, IPropsTheme } from '../../../types';

interface IActive {
  active: boolean;
  theme: ITheme;
}

export const ProfileContainer = styled.div`
  width: 780px;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin: 0 auto;
`;

export const Edit = styled.div<IPropsTheme>`
  width: 275px;
  margin: 0 auto 80px;
  height: 90px;
  border: 1px solid #414d55;
  filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
  border-radius: 16px;
  color: ${({ theme }) => theme && theme.color};
  & > .text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    letter-spacing: 0.01px;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background: ${({ theme }) => theme && theme.background};
  }
`;

export const Tabs = styled.div`
  width: 214px;
  height: 32px;
  margin: 0 auto;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

export const LeftTab = styled.div<IActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #414d55;
  border-right: none;
  cursor: pointer;
  border-radius: 8px 0px 0px 8px;
  color: ${({ active, theme }) => (active ? '#fff' : theme.color)};
  background: ${({ active, theme }) => active && theme.background};
`;

export const RightTab = styled.div<IActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #414d55;
  border-left: none;
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  color: ${({ active, theme }) => (active ? '#fff' : theme.color)};
  background: ${({ active, theme }) => active && theme.background};
`;

export const Feedbacks = styled.div<IPropsTheme>`
  margin: 0 161px;
  margin-top: 50px;
  /* background: red; */
  .infinite-scroll {
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme && theme.color};
      border-radius: 3px;
    }
  }
`;

export const ListJobs = styled.div`
  width: 100%;
  & > .new-job {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0;
    .text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #fff;
    }
  }
  a {
    text-decoration: none;
    cursor: default;
  }
`;
