import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const BudgetTable = () => {
    return (
        <Table striped bordered hover size="sm">
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Detail</th>
                    <th>Amount</th>
                    <th>Amount</th>
                </tr>
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
    );
}

export default BudgetTable 