import Accordion from 'react-bootstrap/Accordion';
import useAccordionButton from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <Form>
      <Row>
        <Col>
          <Form.Label onClick={decoratedOnClick}>{children}</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="Amount" value="20.000" />
        </Col>
        <Col>
          <Form.Label>5.000</Form.Label>
        </Col>
      </Row>
    </Form>
  );
}

function App() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Luxuries</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Table striped bordered hover size="sm">
            <thead>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </thead>
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
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}


export default App;
