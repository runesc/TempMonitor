/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import avatar from "assets/img/default-avatar.png";
import './Admin.css'

var ps;


class Admin extends Component {

  state = {
    opacity: 0,
    sidebarOpened: false
  }
  notificationAlertRef = React.createRef(null);
  mainPanelRef = React.createRef(null);


  /* Esta funcion regristra los clicks en los botones y controlan el sidebar */

  /**
    TODO: quitar esta funcion pronto...
   */
  handleMiniClick = () => {
    if (document.body.classList.contains("sidebar-mini")) {
      this.setState({sidebarMini: false});

    } else {
      this.setState({sidebarMini: true})
    }
    /*
    ! Esto activa la notificacion

    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    this.notificationAlertRef.current.notificationAlert(options);*/
    document.body.classList.toggle("sidebar-mini");
  };

  // Esta funcion cierra el sidebar
  closeSidebar = () => {
    this.setState({sidebarOpened: false})
    document.documentElement.classList.remove("nav-open");
  };

  getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  toggleSidebar = () => {
    const { sidebarOpened } = this.state;

    this.setState({sidebarOpened: !sidebarOpened});
    document.documentElement.classList.toggle("nav-open");
  };

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  // Cambiar el color del sidebar
  handleActiveClick = (activeColor) => {
    this.setState({activeColor});
  };


  render() {
    const {sidebarOpened, opacity } = this.state;
    return (
      <div className="wrapper">
        <div className="rna-container">
          <NotificationAlert ref={this.notificationAlertRef} />
        </div>
        <div className="navbar-minimize-fixed" style={{ opacity: opacity }}>
          <button
            className="minimize-sidebar btn btn-link btn-just-icon"
            onClick={this.handleMiniClick}
          >
            <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
            <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
          </button>
        </div>
        <Sidebar
          {...this.props}
            routes={routes}
            activeColor='blue'
            logo={{
            outterLink: "#!",
            text: "Invitado",
            imgSrc: avatar,
          }}
          closeSidebar={this.closeSidebar}
        />
      <div className="main-panel" ref={this.mainPanelRef} data={''}>
        <AdminNavbar
          {...this.props}
          handleMiniClick={this.handleMiniClick}
          brandText='Monitoreo de temperatura'
          sidebarOpened={sidebarOpened}
          toggleSidebar={this.toggleSidebar}
        />
        <Switch>
          {this.getRoutes(routes)}
          <Redirect from="*" to="/admin/dashboard" />
        </Switch>
        {
          // we don't want the Footer to be rendered on full screen maps page
          this.props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
    </div>
    );
  }
}

/*const Admin = (props) => {
  const [activeColor, setActiveColor] = React.useState("blue");
  const [sidebarMini, setSidebarMini] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const mainPanelRef = React.useRef(null);
  const notificationAlertRef = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  React.useEffect(() => {
    let innerMainPanelRef = mainPanelRef;
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current);
      mainPanelRef.current &&
        mainPanelRef.current.addEventListener("ps-scroll-y", showNavbarButton);
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener("scroll", showNavbarButton);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
        innerMainPanelRef.current &&
          innerMainPanelRef.current.removeEventListener(
            "ps-scroll-y",
            showNavbarButton
          );
      }
      window.removeEventListener("scroll", showNavbarButton);
    };
  }, []);
  const showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop > 50)
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop <= 50)
    ) {
      setOpacity(0);
    }
  };
};*/

export default Admin;
