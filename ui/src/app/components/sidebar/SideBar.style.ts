import styled from 'styled-components';

export const SideBarContainer = styled.div`
  & .nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    background: #e0f7fa;
    transition: 0.4s;
  }
  & .close-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    color: red;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 900;
  }
`;
