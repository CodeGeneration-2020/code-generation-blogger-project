import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2%;
  background: #0d0b18;
  a {
    text-decoration: none;
    cursor: default;
  }
`;
export const FilterList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const FilterItem = styled('li')`
  cursor: pointer;
  background: pink;
  padding: 1em;
  border: 1px solid silver;
  border-radius: 1em;
  margin: 1em 0;
  &:hover {
    background: rgba(255, 0, 0, 0.4);
  }
`;
export const BloggerListWrap = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
