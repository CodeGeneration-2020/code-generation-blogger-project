import React from 'react';
import { Helmet } from 'react-helmet-async';
import Registration from '../../../services/registration.service';
import UsersAPI from '../../../services/users.service';
import { NavLink } from 'react-router-dom';
import SideBar,{openSlideMenu} from '../../components/sidebar/SideBar';

export function HomePage() {
  const [idBlogger,toggleIdBlogger] = React.useState<number | undefined>();

  const openSideBar = async (e,id:number) =>{
    e.preventDefault();
    await toggleIdBlogger(id);
    openSlideMenu();
  }

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <a
        href={
          'https://api.instagram.com/oauth/authorize/?client_id=1582327085279138&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code'
        }
      >
        Login
      </a>
      <button onClick={() => Registration.auth('blogger')}>auth</button>
      <button onClick={() => UsersAPI.getUsers('bloggers')}>getUsers</button>
      <button onClick={() => UsersAPI.getBloggersByFilters()}>
        getBloggersByFilters
      </button>
      <div>
        <h1>List Bloggers</h1>
        <NavLink onClick={(e)=>{openSideBar(e,21001)}} to="/blogger/details/21001">GO</NavLink>
        <NavLink onClick={(e)=>{openSideBar(e,121312122)}} to="/blogger/details/121312122">GO2</NavLink>
      </div>
      {idBlogger && <SideBar id={idBlogger} />}
    </div>
  );
}
