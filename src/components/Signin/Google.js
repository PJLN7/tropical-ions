import React from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { signin } from '../../features/userSlice';

import './styles.css';

const Google = (props) => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    if (response.error) return;
    const { familyName, givenName, googleId } = response.profileObj;
    const user = {
      firstName: givenName,
      lastName: familyName,
      id: googleId,
    };

    dispatch(signin(user));
    localStorage.setItem('user', JSON.stringify(user));
    props.history.push('/account/budget-planner');
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_OAUTH_ID}
      buttonText='Sign in with Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      theme='dark'
      className='google-btn'
    />
  );
};

export default withRouter(Google);
