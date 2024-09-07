import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import { Footer } from '@components/Footer';

const PublicRoute = ({ isLogin }) => {
  return isLogin ? (
    <Navigate to={'/dashboard'} />
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

PublicRoute.propTypes = {
  isLogin: PropTypes.bool,
};

export default PublicRoute;
