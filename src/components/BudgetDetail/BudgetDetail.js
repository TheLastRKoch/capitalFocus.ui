import React from 'react';
import './BudgetDetail.css';

class BudgetDetail extends React.Component {
  render() {
    return (
      <div className="BudgetDetail">
        <div><a href="#">{this.props.description}</a></div>
        <div>{this.props.amount}</div>
        <button>X</button>
      </div>
    );
  }
}

export default BudgetDetail;
