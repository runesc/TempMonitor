import React, { Component } from 'react';
import {
    Button,
    ButtonGroup,
  } from "reactstrap";

class DeviceTr extends Component {
    render() {
        const { ubicacion, temp, hum, contact } = this.props;
        return (
            <tr>
                <td>{ ubicacion }</td>
                <td className="text-red">{ temp } (°C)</td>
                <td className="text-blue">{hum} %</td>
                <td>{ contact }</td>
                <td>
                    <Button color="info" size="sm" title="Ver Grafico" type="button">
                        <i className="tim-icons icon-refresh-01" /> Ver Grafico
                    </Button>
                </td>
            </tr>
        );
    }
}

export default DeviceTr;