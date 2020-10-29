import styled from 'styled-components';
import { bloggerCard } from '../../../../consts/responsive';

export const CardContainer = styled.div`
  width: ${bloggerCard.card + 'px'};
  height: 190px;
  padding: 0 83px;
  @media screen and (max-width: 1180px) {
    width: ${bloggerCard.card * 0.8 + 'px'};
    padding: 0 50px;
  }
  @media screen and (max-width: 980px) {
    width: ${bloggerCard.card * 0.6 + 'px'};
    padding: 0 30px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin-bottom: 24px;
`;

export const PersonInfo = styled.div<{ theme }>`
  width: ${bloggerCard.personInfo.maxWidth + 'px'};
  @media screen and (max-width: 980px) {
    width: ${bloggerCard.personInfo.maxWidth * 0.8 + 'px'};
  }
  display: flex;
  & > .avatar {
    margin-right: 19px;
    @media screen and (max-width: 980px) {
      margin-right: 9px;
    }
    & > img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      @media screen and (max-width: 980px) {
        width: 70px;
        height: 70px;
      }
    }
  }

  & > .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${bloggerCard.personInfo.info + 'px'};
    @media screen and (max-width: 980px) {
      width: ${bloggerCard.personInfo.info * 0.8 + 'px'};
    }
    & > .full-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      line-height: 20px;
      letter-spacing: 0.01px;
      color: #ffffff;
      margin-bottom: 2px;
      font-size: 18px;
      @media screen and (max-width: 980px) {
        font-size: 15px;
      }
      & > .trim {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    & > .location {
      width: 100%;
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      color: ${({ theme }) => theme && theme.color};
      font-size: 14px;
      @media screen and (max-width: 980px) {
        font-size: 12px;
      }
      & > .country {
        margin-right: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & > .city {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const Audience = styled.div<{ theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${bloggerCard.audience.maxWidth + 'px'};
  @media screen and (max-width: 980px) {
    width: ${bloggerCard.audience.maxWidth * 0.8 + 'px'};
  }
  & > .result {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    color: ${({ theme }) => theme.color && theme.color};
    font-size: 28px;
    @media screen and (max-width: 980px) {
      font-size: 24px;
    }
    & > .value {
      margin-right: 4px;
    }
    & > .unit {
    }
  }

  & > .details {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.67px;
    text-transform: uppercase;
    margin-bottom: 4px;
    font-size: 12px;
    @media screen and (max-width: 980px) {
      font-size: 10px;
    }
    & > .er {
      display: flex;
      justify-content: center;
      & > .count {
        color: ${({ theme }) => theme.color && theme.color};
        font-weight: 700;
        margin-right: 3px;
      }
      & > .text {
        color: #30393e;
      }
    }
    & > .chart {
      height: 6px;
      margin-left: 6px;
      width: ${bloggerCard.audience.chart + 'px'};
      @media screen and (max-width: 980px) {
        margin-left: 4px;
        width: ${bloggerCard.audience.chart * 0.8 + 'px'};
      }
    }
  }
  & > .text-field {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #414d55;
    @media screen and (max-width: 980px) {
      font-size: 10px;
    }
  }
`;

export const PriceList = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 14px;
  font-size: 14px;
  width: ${bloggerCard.price + 'px'};
  @media screen and (max-width: 980px) {
    width: ${bloggerCard.price * 0.8 + 'px'};
    font-size: 12px;
  }
  & > .post {
    width: 52px;
    @media screen and (max-width: 980px) {
      width: 44px;
    }
    & > .icon {
      text-align: center;
      margin-top: 27px;
      margin-bottom: 22px;
      & > img {
        width: 18px;
        height: 22px;
      }
    }
  }
  & > .story {
    width: 52px;
    @media screen and (max-width: 980px) {
      width: 44px;
    }
    & > .icon {
      text-align: center;
      margin-top: 23px;
      margin-bottom: 19px;
      & > img {
        width: 18px;
        height: 29px;
      }
    }
  }
  & > .post-story {
    width: 78px;
    @media screen and (max-width: 980px) {
      width: 63px;
    }
    & > .icon {
      text-align: center;
      margin-top: 23px;
      margin-bottom: 19px;
      & > img {
        width: 51px;
        height: 29px;
      }
    }
  }

  .title {
    text-align: center;
    color: #ffffff;
  }
  .sum {
    text-align: center;
    color: #ffffff;
  }
`;

export const TagsList = styled.div<{ theme }>`
  width: ${bloggerCard.tags + 'px'};
  @media screen and (max-width: 980px) {
    width: ${bloggerCard.tags * 0.8 + 'px'};
  }
  & > .tags {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > .first-line {
      display: flex;
      justify-content: center;
      margin-bottom: 7px;
      .tag {
        &:nth-child(2) {
          margin-left: 7px;
        }
      }
    }

    & > .second-line {
      width: 100%;
      display: flex;
      justify-content: center;
      .tag {
        margin-right: 7px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .tag {
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.color && theme.color};
    @media screen and (max-width: 980px) {
      font-size: 12px;
    }
  }
`;
