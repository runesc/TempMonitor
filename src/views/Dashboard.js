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
	chartExample1
} from "variables/charts.js";

class Dashboard extends Component {

	state = {
		dispositivos: [],
		defaultChart: '',
		switchChart: false,
		data: {
			labels: []
		}
	}

	filterDevices = device => device.val().filter(data => { return data != null})

	componentDidMount = async() => {
		let devices = db.ref('dispositivos')
		let label = this.state.data.labels

		let dataList = []

		await devices.on('value', snapshot => {
			this.setState({ dispositivos: this.filterDevices(snapshot) })

			this.state.dispositivos.map(device => {
				if(device.Id === this.state.defaultChart){
					// Guardar en data lo siguiente
					const {temp, hum} = device

					 // traer lo que actualmente esté en labels
					label.push(new Date().toLocaleTimeString('es-mx',{hour:'2-digit',minute:'2-digit',second:'2-digit'}) )

					let bg = '' // Fondo del grafico

					if (this.state.switchChart === false){
						dataList.push(temp)
						bg = "rgba(255, 99, 132, 0.2)" // color rojo porque es temp
					}else{
						dataList.push(hum)
						bg = "rgba(29, 138, 248)" // color azul para hum
					}

					this.setState({
						data: {
							labels: [...label],
							datasets: [
								{
									data: [...dataList],
									backgroundColor: [
										bg
									]
								}
							]
						}
					})
				}
			})

		})
	}

	selectChartData = k => {
		// Limpiar datos del estado
		this.setState({
			defaultChart: k,
			data: {
				labels: [],
				datasets: []
			}
		})
	}

	cambiarGrafico = (value) => {
		// Limpiar de nuevo el estado
		this.setState({
			switchChart: value,
			data: {
				labels: [],
				datasets: []
			}
		})
	}

	render() {
		const {dispositivos, data} = this.state;
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
											color="warning"
											id="0"
											size="sm"
											tag="label"
											className="btn-simple"
											onClick={(e) => this.cambiarGrafico(false)}
										>
											<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
												Temperatura
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
											className="btn-simple"
											onClick={(e) => this.cambiarGrafico(true)}

										>
											<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
												Humedad
											</span>
											<span className="d-block d-sm-none">
												<i className="tim-icons icon-gift-2" />
											</span>
										</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<Line
									data={data}
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
												<DeviceTr key={k} ubicacion={i.Ubicacion} temp={i.temp} hum={i.hum} contacto={i.Contacto} listKey={ e => this.selectChartData(i.Id) }/>
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
