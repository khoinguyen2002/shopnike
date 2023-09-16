import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      {/* Something Else  */}
      <Header />
      <div>{props.children}</div>
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;
