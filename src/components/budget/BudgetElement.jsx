import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

// Components
import BudgetToggle from './BudgetToggle';
import BudgetTable from './BudgetTable';

const BudgetElement = (props) => {


  return (
  <Card>
    <Card.Header>
      <Form>
        <Row>
          <Col><BudgetToggle eventKey={props.index}>{props.categoryName}</BudgetToggle></Col>
          <Col>
            <Form.Control placeholder="Budget" value={props.budget} />
          </Col>
          <Col>
            <Form.Control placeholder="Amount" value={props.amount} readOnly />
          </Col>
        </Row>
      </Form>
    </Card.Header>
    <Accordion.Collapse eventKey={props.index}>
      <BudgetTable></BudgetTable>
    </Accordion.Collapse>
  </Card>
  );
};

export default BudgetElement;
