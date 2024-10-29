import { useContext, useReducer, useState } from 'react';
import authReducer from '../reducers/authReducer';
import LoginContext from '../contexts/loginContext';

const Login  = () => {
  

  const {user, dispatch} = useContext(LoginContext);

 
  const handleLogin = () => {
   dispatch({type:'LOGIN', username:'Alicia!'})
  }

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-1">

      {user ? (
          <div>
            <h4 className='loginMessage'>ALL HAIL {user}!</h4>
          <button className="logoutButton" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          
              <button className="loginButton" onClick={handleLogin}>
              Login
            </button>
          
      )}
    </div>
  );
};

export default Login;