import Accordion from 'react-bootstrap/Accordion';

import Header from '../components/layout/Header'
import Meta from '../components/layout/Meta'
import BudgetElement from '../components/budget/BudgetElement'

const BudgetManagement = () => {
  // page details   
  const pageTitle = "Budget"
  const pageDescription = "Where manage the dynamic budget"


  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <Accordion defaultActiveKey="0">
        <BudgetElement
          index="1"
          categoryName="Projects"
          budget="30.000"
          amount="10.000" />
        <BudgetElement
          index="2"
          categoryName="Car"
          budget="40.000"
          amount="5.000" />
        <BudgetElement
          index="3"
          categoryName="My Gift"
          budget="75.000"
          amount="0" />
          <BudgetElement
          index="4"
          categoryName="Groseries"
          budget="60.000"
          amount="2.000" />
          <BudgetElement
          index="5"
          categoryName="Physical Health"
          budget="50.000"
          amount="25.000" />
          <BudgetElement
          index="6"
          categoryName="Travel"
          budget="30.000"
          amount="0" />
      </Accordion>
    </div>
  )
}

export default BudgetManagement;
