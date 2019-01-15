import React from 'react'

import GlobalStyles from './GlobalStyles'

const Layout = ({ children }) => (
  <React.Fragment>
    <div
      className="image"
      style={{
        backgroundImage: `url('/wp-content/uploads/2019/01/IMG_2528.jpg')`
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
        overflow: hidden;
      }
    `}</style>
    <GlobalStyles />
  </React.Fragment>
)

export default Layout
