import React from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Temp = () => (
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <Form>
          <Row>
            <Col>
              <Form.Label>Category</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Amount" />
            </Col>
            <Col>
              <Form.Label>Category</Form.Label>
            </Col>
          </Row>
        </Form>
      </Accordion.Header>
      <Accordion.Body>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <td>12/12/2012</td>
              <td>Gym</td>
              <td>25000</td>
              <td><Button variant="danger">x</Button></td>
            </tr>
            <tr>
              <td>12/12/2012</td>
              <td>Liberty</td>
              <td>16000</td>
              <td><Button variant="danger">x</Button></td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

Temp.propTypes = {};

Temp.defaultProps = {};

export default Temp;
