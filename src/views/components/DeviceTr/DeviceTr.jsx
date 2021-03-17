import React, { Component } from 'react';
import {
    Button,
    ButtonGroup,
  } from "reactstrap";

class DeviceTr extends Component {
    render() {
        const { hospital, area, ubicacion, temp, hum, contact, listKey } = this.props;
        return (
            <tr>
                <td>{hospital}</td>
                <td>{area}</td>
                <td>{ ubicacion }</td>
                <td className="text-red">{ temp } (°C)</td>
                <td className="text-blue">{hum} %</td>
                <td>{ contact }</td>
                <td>
                    <Button onClick={listKey} color="info" size="sm" title="Ver Grafico" type="button">
                        Ver Grafico
                    </Button >
                </td>
                <td>{listKey}</td>
            </tr>
        );
    }
}

export default DeviceTr;