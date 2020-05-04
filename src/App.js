import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from './features/userSlice';
import Signin from './components/Signin';
import Account from './components/Account';

import './App.css';

function App(props) {
  const dispatch = useDispatch();

  const authCheck = () => {
    let localUser = localStorage.getItem('user');

    if (!localUser) {
      props.history.replace();
      props.history.push('/');
    } else {
      dispatch(signin(localUser));
    }
  };

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <div className='Signin'>
            <Signin />
          </div>
        </Route>
        <Route path='/account'>
          <div className='Account'>
            <Account />
          </div>
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default withRouter(App);
