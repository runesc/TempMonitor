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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";

const AdminNavbar = (props) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("dark-navbar-fixed");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setColor("dark-navbar-fixed");
    } else {
      setColor("bg-white");
    }
    setCollapseOpen(!collapseOpen);
  };

  return (
    <>
      <Navbar
        className={classNames("navbar-absolute dark-navbar-fixed", {
          [color]: props.location.pathname.indexOf("full-screen-map") === -1,
        })}
        expand="lg"
        style={{ position: "fixed", backgroundColor: "#1e1e2f" }}
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={props.handleMiniClick}
              >
                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Sidebar toggle
              </UncontrolledTooltip>
            </div>
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={props.toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img
                      alt="..."
                      src={require("assets/img/default-avatar.png").default}
                    />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Configuración</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Cerrar sesión</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
