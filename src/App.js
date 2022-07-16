import Container from 'react-bootstrap/Container';
import BudgetDetail from './components/BudgetDetail/BudgetDetail';
import BudgetElement from './components/BudgetElement/BudgetElement'

function App() {
  return (
    <Container>
      <BudgetElement categoryName="Luxuries" amount="20.000" remainingAmount="10.000"></BudgetElement>
      <BudgetDetail description="Cinema" amount="12.000"></BudgetDetail>
      <BudgetElement categoryName="Groseries" amount="70.000" remainingAmount="10.000"></BudgetElement>
      <BudgetElement categoryName="Travel" amount="30.000" remainingAmount="10.000"></BudgetElement>
    </Container>
  );
}

export default App;
