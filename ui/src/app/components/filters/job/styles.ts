import styled from 'styled-components';

export const FiltersContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const Filters = styled.div`
  display: flex;
`;

export const SharedFilters = styled.div`
  width: 872px;
  @media screen and (max-width: 1180px) {
    width: ${(872 - 24) * 0.8 + 24 + 'px'};
  }
  @media screen and (max-width: 980px) {
    width: ${(872 - 24) * 0.6 + 24 + 'px'};
  }
  display: flex;
  flex-direction: column;
  margin-right: 23px;
  & > .price {
    width: 100%;
    height: 180px;
    margin-bottom: 20px;
  }
  & > .location {
    width: 100%;
    height: 204px;
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
  width: 275px;
  @media screen and (max-width: 1180px) {
    width: ${275 * 0.8 + 'px'};
  }
  @media screen and (max-width: 980px) {
    width: ${275 * 0.6 + 'px'};
  }
`;
