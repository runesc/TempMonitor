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
import { auth, db } from '../config/firebase'


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Row,
  Col
} from "reactstrap";

// Custom components
import DeviceTr from "./components/DeviceTr/DeviceTr"

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

class Dashboard extends Component {

  state = {
    dispositivos: [],
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  }
};

  bigChartData = () => {
    return [10,12,30,49]
  }

  setBgChartData = (name) => {}

  componentDidMount = async() => {
    let devices = db.ref('dispositivos')

    await devices.on('value', (snapshot) => {
      const data = snapshot.val()

      let d = []

      data.map((device) => {
        if(device){
         d.push(device)
        }
      })

      let dispositivos = this.state.dispositivos

      dispositivos = [...d]

      this.setState({dispositivos})

    })

  }

  render() {
    const {dispositivos} = this.state;
    return (
      <div className="content">
      { /**  Esto manipula los graficos de la pagina */}
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Datos de</h5>
                  <CardTitle tag="h2">Ubicacion del dispositivo</CardTitle>
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
                  data={this.state.data}
                  options={chartExample1.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      { /** Aqui va la lista de la ubicación de los sensores */}
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
              <CardTitle tag="h5">Tabla de dispositivos</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Ubicación</th>
                    <th>Temperatura</th>
                    <th>Humedad</th>
                    <th>Contacto</th>
                    <th>Grafico</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dispositivos.length !== 0 ? (
                      dispositivos.map( (i, k) =>
                        <DeviceTr key={k} ubicacion={i.Ubicacion} temp={i.temp} hum={i.hum} contacto={i.Contacto}/>
                      )
                    ) : <tr>Sin datos</tr>
                  }
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
