import styled from 'styled-components';
import { jobCard } from '../../../../consts/responsive';

export const JobCardContainer = styled.div<{ theme }>`
  display: flex;
  background: #1A1E24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin-bottom: 24px;
  height: 190px;
  width: ${jobCard.card + 'px'};
  padding-left: 80px;
  padding-right: 120px;
  @media screen and (max-width: 1180px) {
    width: ${jobCard.card * 0.8 + 'px'};
    padding-left: 50px;
    padding-right: 75px;
  }
  @media screen and (max-width: 980px) {
    width: ${jobCard.card * 0.6 + 'px'};
    padding-left: 30px;
    padding-right: 50px;
  }
  /* job-info */
  & > .job-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 47px 0 41px 0;
    width: ${jobCard.jobInfo + 'px'};
    margin-right: auto;
    @media screen and (max-width: 1180px) {
      width: ${jobCard.jobInfo * 0.8 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${jobCard.jobInfo * 0.6 + 'px'};
    }
    & > .short-title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.01px;
      color: #ffffff;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (max-width: 1180px) {
        font-size: 20px;
      }
      @media screen and (max-width: 980px) {
        font-size: 16px;
      }
    }

    & > .budget {
      display: flex;
      align-items: flex-end;
      & > .text {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        margin-right: 15px;
      }
      & > .sum {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        text-align: center;
        color: ${({ theme }) => theme.color && theme.color};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 1180px) {
          font-size: 24px;
        }
        @media screen and (max-width: 980px) {
          font-size: 20px;
        }
      }
    }
  }
  /* END job-info */

  /* location */
  & > .location {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 46px 0 47px 0;
    margin-right: 120px;
    width: ${jobCard.location + 'px'};
    @media screen and (max-width: 1180px) {
      /* width: ${jobCard.location * 0.9 + 'px'}; */
      margin-right: 75px;
    }
    @media screen and (max-width: 980px) {
      width: ${jobCard.location * 0.8 + 'px'};
      margin-right: 50px;
    }
    & > .country {
      margin-bottom: 7px;
    }
    & > .city {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  /*End location */

  /* tags */
  & > .tags {
    padding: 85px 0 47px 0;
    width: ${jobCard.tags + 'px'};
    @media screen and (max-width: 1180px) {
      width: ${jobCard.tags * 0.9 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${jobCard.tags * 0.8 + 'px'};
    }
  }
  /* End tags */

  .item {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.color && theme.color};
    white-space: nowrap;
    margin-right: 7px;
    &:last-child {
      margin-right: 0px;
    }
    @media screen and (max-width: 980px) {
      font-size: 12px;
    }
  }
`;
