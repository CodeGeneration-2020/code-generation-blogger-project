import styled from 'styled-components';
import { bloggerFilters } from '../../../../consts/responsive';

export const FiltersContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
`;

export const Filters = styled.div`
  display: flex;
`;

export const SharedFilters = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 23px;
  & > .quantitative-filters {
    margin-bottom: 20px;
    display: flex;
    & > .subscribers {
      margin-right: 24px;
      width: ${bloggerFilters.subscribers + 'px'};
      @media screen and (max-width: 1180px) {
        width: ${bloggerFilters.subscribers * 0.8 + 'px'};
      }
      @media screen and (max-width: 980px) {
        width: ${bloggerFilters.subscribers * 0.6 + 'px'};
      }
    }
    & > .price {
      width: ${bloggerFilters.price + 'px'};
      @media screen and (max-width: 1180px) {
        width: ${bloggerFilters.price * 0.8 + 'px'};
      }
      @media screen and (max-width: 980px) {
        width: ${bloggerFilters.price * 0.6 + 'px'};
      }
    }
  }
  & > .person-filters {
    display: flex;
    height: 204px;
    & > .gender {
      margin-right: 21px;
      width: ${bloggerFilters.gender + 'px'};
      @media screen and (max-width: 1180px) {
        width: ${bloggerFilters.gender * 0.8 + 'px'};
      }
      @media screen and (max-width: 980px) {
        width: ${bloggerFilters.gender * 0.6 + 'px'};
      }
    }
    & > .location {
      width: ${bloggerFilters.location + 'px'};
      @media screen and (max-width: 1180px) {
        width: ${bloggerFilters.location * 0.8 + 'px'};
      }
      @media screen and (max-width: 980px) {
        width: ${bloggerFilters.location * 0.6 + 'px'};
      }
    }
  }

  .slider-handles {
    & > .handle:first-child {
      margin-left: 6px;
      margin-top: 1px;
    }
    & > .handle:last-child {
      margin-left: -10px;
      margin-top: 1px;
    }
  }
`;

export const Tags = styled.div`
  width: ${bloggerFilters.tags + 'px'};
  @media screen and (max-width: 1180px) {
    width: ${bloggerFilters.tags * 0.8 + 'px'};
  }
  @media screen and (max-width: 980px) {
    width: ${bloggerFilters.tags * 0.6 + 'px'};
  }
`;
