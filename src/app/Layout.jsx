import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './common';

const Layout = () => (
  <div className="app">
    <Helmet>
      <script async defer src="https://buttons.github.io/buttons.js" />
    </Helmet>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
