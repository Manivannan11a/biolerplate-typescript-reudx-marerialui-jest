import React from 'react';

import Footer from "./Footer";
import Header from "./Header";

import("../../theme/"+ process.env.REACT_APP_ACTIVE_THEME +".css");

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <h1 className='light'>hello</h1>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;