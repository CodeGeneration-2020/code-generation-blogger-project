import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CustomerInfo = styled.div<IPropsTheme>`
  margin-left: 100px;
  margin-bottom: 80px;
  display: flex;
  & > .ava {
    margin-right: 41px;
    & > img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
  }
  & > .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > .fullname {
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: 0.01px;
      color: #ffffff;
    }
    & > .location {
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 20px;
      color: ${({ theme }) => theme && theme.color};
      & > .country {
        margin-right: 3px;
      }
      & > .city {
      }
    }
  }
`;

export const ContactInfo = styled.div<IPropsTheme>`
  margin-left: 53px;
  margin-right: 56px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  & > .title {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 37px;
  }
  & > .contacts {
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    & > .item {
      display: flex;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0px;
      }
      & > .icon {
        width: 42px;
        display: flex;
        justify-content: center;
        margin-right: 23px;
      }
      & > .content {
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 34px;
        color: ${({ theme }) => theme && theme.color};
      }
    }
  }
`;

// export const Edit = styled.div<IPropsTheme>`
//   width: 275px;
//   margin: 0 auto 80px;
//   height: 90px;
//   border: 1px solid #414d55;
//   filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
//   border-radius: 16px;
//   color: ${({ theme }) => theme && theme.color};
//   & > .text {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-transform: uppercase;
//     font-family: 'Poppins', sans-serif;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 20px;
//     letter-spacing: 0.01px;
//   }
//   &:hover {
//     cursor: pointer;
//     color: white;
//     background: ${({ theme }) => theme && theme.background};
//   }
// `;

// export const Tabs = styled.div`
//   width: 214px;
//   height: 32px;
//   margin: 0 auto 50px;
//   display: flex;
//   font-family: 'Roboto', sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 20px;
// `;

// export const LeftTab = styled.div<IActive>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50%;
//   border: 1px solid #414d55;
//   border-right: none;
//   cursor: pointer;
//   border-radius: 8px 0px 0px 8px;
//   color: ${({ active, theme }) => (active ? '#fff' : theme.color)};
//   background: ${({ active, theme }) => active && theme.background};
// `;

// export const RightTab = styled.div<IActive>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50%;
//   border: 1px solid #414d55;
//   border-left: none;
//   cursor: pointer;
//   border-radius: 0px 8px 8px 0px;
//   color: ${({ active, theme }) => (active ? '#fff' : theme.color)};
//   background: ${({ active, theme }) => active && theme.background};
// `;

// export const Feedbacks = styled.div<IPropsTheme>`
//   width: 100%;
//   margin-left: 161px;
//   .infinite-scroll {
//     overflow: scroll;
//     ::-webkit-scrollbar {
//       width: 3px;
//       height: 3px;
//     }
//     ::-webkit-scrollbar-track {
//       background-color: #414d55;
//     }
//     ::-webkit-scrollbar-track-piece {
//       background-color: #414d55;
//     }
//     ::-webkit-scrollbar-thumb {
//       background-color: #d022ed;
//       border-radius: 3px;
//     }
//   }
// `;

export const ListJobs = styled.div<IPropsTheme>``;
