import styled from 'styled-components';
import { tags } from '../../../../consts/responsive';

export const TagsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 48px;
  @media screen and (max-width: 1180px) {
    padding-left: 39px;
  }
  @media screen and (max-width: 980px) {
    padding-left: 31px;
  }
`;

export const Tags = styled.div`
  width: ${tags.select + 'px'};
  padding-top: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1180px) {
    width: ${tags.select * 0.8 + 'px'};
  }
  @media screen and (max-width: 980px) {
    width: ${tags.select * 0.6 + 'px'};
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  & > .icon {
    position: absolute;
    z-index: 100;
    top: 4px;
    left: -25px;
  }
  & > .select {
    width: 100%;
    height: 32px;
  }
`;

export const Line = styled.div`
  width: 66px;
  height: 1px;
  margin: 30px 0 21px;
  background: #414d55;
  transform: translateX(-12px);
  @media screen and (max-width: 980px) {
    width: 56px !important;
  }
`;

export const ListTags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > .tag {
    margin-right: 7px;
    margin-bottom: 5px;
    .tag-name {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      @media screen and (max-width: 1180px) {
        font-size: 12px;
      }
    }
  }
`;
