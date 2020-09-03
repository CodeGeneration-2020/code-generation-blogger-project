import styled from 'styled-components';

export const SideBarContainer = styled.div`
  & .nav {
    display:flex;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    overflow-x: hidden;
    transition: 0.4s;
    & .close-menu{
      width:30%;
      background:black;
      opacity:.5;
    }
    & .sidebar{
      position:relative;
      width:70%;
      height: 100%;
      top: 0;
      right: 0;
      overflow-x: hidden;
      background: #e0f7fa;
    }
  }
  & .btn-close-sidebar {
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
