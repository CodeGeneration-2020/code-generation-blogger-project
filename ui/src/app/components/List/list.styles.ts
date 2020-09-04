import styled from 'styled-components';
export const Wrapper = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 2em;
  flex-wrap: wrap;
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
export const BloggerItem = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
`;
export const Avatar = styled('div')`
  width: 250px;
  height: 250px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
export const DataCol = styled(BloggerListWrap)`
  width: 28%;
  flex-wrap-wrap;
`;
export const TagBox = styled(DataCol)`
  border: 3px solid silver;
  & > span {
    border-radius: 5px;
    padding: 0.5em;
    background: silver;
    color: black;
    margin: 0.5em;
    display: inline-block;
  }
`;
