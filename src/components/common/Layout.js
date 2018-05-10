import React from "react";

const Layout = ({ children }) => (
  <React.Fragment>
    <div
      className="image"
      style={{
        backgroundImage: `url('/wp-content/uploads/2018/01/IMG_2528.jpg')`
      }}
    />
    <div className="main-wrapper">{children}</div>
    <style jsx>{`
      .image {
        height: 300px;
        background-size: cover;
        background-position: center center;
      }

      .main-wrapper {
        position: relative;
      }
    `}</style>
  </React.Fragment>
);

export default Layout;
