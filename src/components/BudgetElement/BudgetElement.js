import React from 'react';
import './BudgetElement.css';
import PropTypes from 'prop-types';

const BudgetElement = (props) => (
  <div className="BudgetElement">
    <form>
      <label>{props.categoryName}</label>
      <label>
        <input type="text" name="name" value={props.remainingAmount} />
      </label>
      <label>{props.amount}</label>
    </form>
  </div>
);

BudgetElement.propTypes = {};
BudgetElement.defaultProps = {};

export default BudgetElement;
