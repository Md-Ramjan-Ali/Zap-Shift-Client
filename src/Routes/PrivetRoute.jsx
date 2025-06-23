import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
  const {user,loading}=useAuth()

  if(loading){
    return <p>Loading</p>
  }

  if(!user){
    return <Navigate to='/auth/login'></Navigate>
  }
  
  return children
};

export default PrivetRoute;