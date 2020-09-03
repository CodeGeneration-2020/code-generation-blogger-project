import React from 'react';
import * as Styled from './SideBar.style';
import BloggerDetails from '../blogger-details/BloggerDetails';
import {connect} from 'react-redux';
import * as BloggerActions from '../../../store/blogger/actions';


export const openSlideMenu = () => {
  let menu: any = document.getElementById('menu');
  menu.style.width = '100%';
};

export const closeSlideMenu = () => {
  const menu: any = document.getElementById('menu');
  menu.style.width = '0';
};

const SideBar = ({ id, clearBloggerComments, clearBloggerInfo, closeSidebarEvent }) => {
  const closeSlideBar = () =>{
    closeSlideMenu();
    clearBloggerComments();
    clearBloggerInfo();
    closeSidebarEvent();
  }
  return (
    <Styled.SideBarContainer>
      <div id="menu" className="nav">
        <div className="close-menu" onClick={closeSlideBar} />
        <div className="sidebar">
        <button
          className="btn-close-sidebar"
          onClick={() => {
            closeSlideBar();
          }}
        >
          X
        </button>
        <BloggerDetails idBlogger={id} />
        </div>
      </div>
    </Styled.SideBarContainer>
  );
};

export default connect(null,
  {
    clearBloggerComments: BloggerActions.ActionCreators.clearBloggerComments,
    clearBloggerInfo: BloggerActions.ActionCreators.clearBloggerInfo,
  }
  )(SideBar);

