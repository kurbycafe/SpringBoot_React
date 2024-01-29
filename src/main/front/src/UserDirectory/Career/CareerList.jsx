import {Button, Col, Container, Form, FormGroup, Row, Table} from "react-bootstrap";
import React from "react";
import Career from "./CareerList";
import {Link} from "react-router-dom";

const CareerList = () => {
    return (
        <Container>
            <Row className="pt-5">
                <Col sm={3} >
                    <Form >
                        <div className="mt-3">
                            <Form.Label htmlFor="ortSelect">Standort</Form.Label>
                            <Form.Select id="ortSelect">
                                <option>All</option>
                                <option value="Goslar">Goslar</option>
                                <option value="Braunschweig">Braunschweig</option>
                            </Form.Select>
                        </div>

                        <div className="mt-3">
                            <Form.Label htmlFor="vertragSelect">Vertragsart</Form.Label>
                            <Form.Select id="vertragSelect">
                                <option>All</option>
                                <option value="Befristet">Befristet</option>
                                <option value="Unbefristet">Unbefristet</option>
                            </Form.Select>
                        </div>

                        <div className="mt-3">
                            <Form.Label htmlFor="zeitSelect">Arbeitszeit</Form.Label>
                            <Form.Select id="zeitSelect">
                                <option>All</option>
                                <option value="Vollzeit">Vollzeit</option>
                                <option value="Teilzeit">Teilzeit</option>
                                <option value="Minijob">Minijob</option>

                            </Form.Select>
                        </div>




                        {/*<Form.Check
                            disabled
                            type="switch"
                            label="disabled switch"
                            id="disabled-custom-switch"
                        />*/}
                    </Form>
                </Col>
                <Col sm={9}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Stellenbezeichnung</th>
                            <th>Standort</th>
                            <th>Vertragsart</th>

                            <th>Datum</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td> <Link to="/CareerView?id=1">Housekeeping(m/w/d)</Link></td>
                            <td>
                                Goslar
                            </td>
                            <td>Unbefristet</td>

                            <td>2021-01-01</td>

                        </tr>
                        </tbody>
                    </Table>
                </Col>



            </Row>

        </Container>
                );
};

                export default CareerList;