import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Route
import PublicRoute from '@pages/PublicRoute';
import PrivateRoute from '@pages/PrivateRoute';

// Public
import Home from '@publicPages/Home';
import About from '@publicPages/About';
import Contact from '@publicPages/Contact';
import FAQs from '@publicPages/FAQs';
import Login from '@publicPages/Login';
import News from '@publicPages/News';
import Service from '@publicPages/Service';

// Private
import Dashboard from '@privatePages/Dashboard';
import Portofolio from '@privatePages/Portofolio';
import Profile from '@privatePages/Profile';

const isLogin = false;

const RoutePath = () => {
  return (
    <Routes>
      <Route element={<PublicRoute isLogin={isLogin} />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/news' element={<News />} />
        <Route path='/service' element={<Service />} />
      </Route>

      <Route element={<PrivateRoute isLogin={isLogin} />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RoutePath;
