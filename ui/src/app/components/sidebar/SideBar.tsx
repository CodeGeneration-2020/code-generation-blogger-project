import React from 'react';
import * as Styled from './SideBar.style';
import BloggerDetails from '../blogger-details/BloggerDetails';

export const openSlideMenu = () => {
  let menu: any = document.getElementById('menu');
  menu.style.width = '70%';
};

export const closeSlideMenu = () => {
  const menu: any = document.getElementById('menu');
  menu.style.width = '0';
};

const SideBar = ({ id }) => {
  return (
    <Styled.SideBarContainer>
      <div id="menu" className="nav">
        <button
          onClick={() => {
            closeSlideMenu();
          }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          X
        </button>
        <BloggerDetails idBlogger={id} />
      </div>
    </Styled.SideBarContainer>
  );
};

export default SideBar;
