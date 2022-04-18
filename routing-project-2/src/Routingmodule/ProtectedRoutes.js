import React from 'react';
import { Navigate,Outlet } from 'react-router';

const ProtectedRoutes = () => {
 const isAuth=window.sessionStorage.getItem('TokenValue')

  return isAuth ? <Outlet/>:<Navigate to ="/Login" />;

};
export default ProtectedRoutes;