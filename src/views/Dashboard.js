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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import { auth } from '../config/firebase'


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

class Dashboard extends Component {

  state = "data1";

  bigChartData = () => {}

  setBgChartData = (name) => {}

  render() {
    return (
      <div className="content">
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Total Shipments</h5>
                  <CardTitle tag="h2">Performance</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup
                    className="btn-group-toggle float-right"
                    data-toggle="buttons"
                  >
                    <Button
                      color="info"
                      id="0"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", {
                        active: this.bigChartData === "data1",
                      })}
                      onClick={() => this.setBgChartData("data1")}
                    >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Accounts
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="1"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", {
                        active: this.bigChartData === "data2",
                      })}
                      onClick={() => this.setBgChartData("data2")}
                    >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Purchases
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-gift-2" />
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="2"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", {
                        active: this.bigChartData === "data3",
                      })}
                      onClick={() => this.setBgChartData("data3")}
                    >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Sessions
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02" />
                      </span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={chartExample1[this.bigChartData]}
                  options={chartExample1.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <CardHeader>
              <div className="tools float-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Remove Data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <CardTitle tag="h5">Management Table</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Job Position</th>
                    <th>Milestone</th>
                    <th className="text-right">Salary</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/tania.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Tania Mike</td>
                    <td>Develop</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">25%</span>
                          <Progress bar max="100" value="25" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 99,225</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip618296632"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip618296632"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="danger"
                        id="tooltip707467505"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip707467505"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/robi.jpg").default}
                        />
                      </div>
                    </td>
                    <td>John Doe</td>
                    <td>CEO</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">77%</span>
                          <Progress bar max="100" value="77" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 89,241</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip216846074"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip216846074"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="danger"
                        id="tooltip391990405"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip391990405"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/lora.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Alexa Mike</td>
                    <td>Design</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">41%</span>
                          <Progress bar max="100" value="41" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 92,144</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip191500186"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip191500186"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="danger"
                        id="tooltip320351170"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip320351170"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/jana.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Jana Monday</td>
                    <td>Marketing</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">50%</span>
                          <Progress bar max="100" value="50" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 49,990</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip345411997"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip345411997"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon"
                        color="danger"
                        id="tooltip601343171"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip601343171"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/mike.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Paul Dickens</td>
                    <td>Develop</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">100%</span>
                          <Progress bar max="100" value="100" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 69,201</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip774891382"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip774891382"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon"
                        color="danger"
                        id="tooltip949929353"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip949929353"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/emilyz.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Manuela Rico</td>
                    <td>Manager</td>
                    <td className="text-center">
                      <div className="progress-container progress-sm">
                        <Progress multi>
                          <span className="progress-value">15%</span>
                          <Progress bar max="100" value="15" />
                        </Progress>
                      </div>
                    </td>
                    <td className="text-right">€ 99,201</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip30547133"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip30547133">
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon"
                        color="danger"
                        id="tooltip156899243"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip156899243"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Dashboard;
