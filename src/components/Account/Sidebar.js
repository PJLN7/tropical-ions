import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NoteIcon from '@material-ui/icons/Note';
import { logout } from '../../features/userSlice';

import './styles.css';

const Sidebar = (props) => {
  const { toggleDrawer } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    props.history.replace();
    props.history.push('/');
  };

  const topNavLinks = [
    {
      to: '/account/budget-planner',
      onClick: toggleDrawer,
      content: (
        <ListItem button value='planner'>
          <ListItemIcon>
            <MonetizationOnIcon className='sidebar_navlinks' />
          </ListItemIcon>
          <ListItemText primary='Budget Planner' className='sidebar_navlinks' />
        </ListItem>
      ),
    },
    {
      to: '/account/election',
      onClick: toggleDrawer,
      content: (
        <ListItem button value='election'>
          <ListItemIcon>
            <NoteIcon className='sidebar_navlinks' />
          </ListItemIcon>
          <ListItemText primary='Election' className='sidebar_navlinks' />
        </ListItem>
      ),
    },
  ];

  return (
    <div className='sidebar_container'>
      <div className='sidebar_content'>
        <List component='ul' aria-label='main navlinks'>
          {topNavLinks.map((link, idx) => (
            <Link key={idx} to={link.to} onClick={link.onClick}>
              {link.content}
            </Link>
          ))}
          <Divider />
          <List component='nav' aria-label='secondary mailbox folders'>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon className='sidebar_navlinks' />
              </ListItemIcon>
              <ListItemText primary='Log Out' className='sidebar_navlinks' />
            </ListItem>
          </List>
        </List>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
