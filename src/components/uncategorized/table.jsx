import Table from 'react-bootstrap/Table';
import React from "react";

class UncategorizedTable extends React.Component{
    render(){
        return (
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Reference</th>
                    <th>Date</th>
                    <th>Commerce</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#">225710411284</a></td>
                    <td>14/Sep/2022</td>
                    <td>NETFLIX.COM</td>
                    <td>USD 15.99</td>
                </tr>
                <tr>
                    <td><a href="#">225710411285</a></td>
                    <td>14/Sep/2022</td>
                    <td>GOOGLE.COM</td>
                    <td>USD 12</td>
                </tr>
                <tr>
                    <td><a href="#">225710411286</a></td>
                    <td>14/Sep/2022</td>
                    <td>MICROSOFT.COM</td>
                    <td>USD 9</td>
                </tr>
            </tbody>
        </Table>
        )
    }
}

export default UncategorizedTable;