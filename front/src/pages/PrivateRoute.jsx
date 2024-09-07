import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLogin }) => {
  return isLogin ? <Outlet /> : <Navigate to={'/'} />;
};

PrivateRoute.propTypes = {
  isLogin: PropTypes.bool,
};

export default PrivateRoute;
