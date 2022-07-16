import React from 'react';
import PropTypes from 'prop-types';
import './BudgetDetail.css';

const BudgetDetail = (props) => (
  <div className="BudgetDetail">
    <div><a href="#">{props.description}</a></div>
    <div>{props.amount}</div>
    <button>X</button>
  </div>
);

BudgetDetail.propTypes = {};
BudgetDetail.defaultProps = {};

export default BudgetDetail;
