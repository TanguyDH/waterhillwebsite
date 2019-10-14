import React from "react"
import "./Layout.scss"

import Navigation from '../Navigation/Navigation';
import SideNavigation from "../SideNavigation/SideNavigation"
import Footer from '../Footer/Footer';


const Layout = ({ pathname, blue, children, bg }) => (
  <div className="layout">
    <div className="layout__content">
      <Navigation pathname={pathname} blue={blue} bg={bg} />
      <SideNavigation />
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
