import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';
import BudgetPlanner from './BudgetPlanner';
import Election from './Election';

import './styles.css';

const Account = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div className='account_drawer'>
      <Sidebar toggleDrawer={toggleDrawer} />
    </div>
  );

  const largeDisplay = (
    <Hidden smDown>
      <div className='Sidebar'>
        <Sidebar />
      </div>
    </Hidden>
  );

  const smallDisplay = (
    <div>
      <Hidden mdUp>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={toggleDrawer}
          >
            <MenuIcon className='sidebar_navlinks' />
          </IconButton>
          <Typography variant='h6' noWrap className='sidebar_navlinks'>
            Budget Planner
          </Typography>
        </Toolbar>
      </Hidden>
      <Hidden mdUp>
        <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer}>
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );

  return (
    <div className='account_container'>
      {largeDisplay}
      <div className='account_switch'>
        {smallDisplay}
        <Switch>
          <Route path='/account/budget-planner'>
            <BudgetPlanner />
          </Route>
          <Route path='/account/election'>
            <Election />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Account;
