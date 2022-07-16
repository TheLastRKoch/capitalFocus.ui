import Container from 'react-bootstrap/Container';
import BudgetDetail from './components/BudgetDetail/BudgetDetail';
import BudgetElement from './components/BudgetElement/BudgetElement'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Temp from './components/Temp/Temp';

function App() {
  return (
    // <Container>
    //   <BudgetElement categoryName="Luxuries" amount="20.000" remainingAmount="10.000"></BudgetElement>
    //   <BudgetDetail description="Cinema" amount="12.000"></BudgetDetail>
    //   <BudgetElement categoryName="Groseries" amount="70.000" remainingAmount="10.000"></BudgetElement>
    //   <BudgetElement categoryName="Travel" amount="30.000" remainingAmount="10.000"></BudgetElement>
    // </Container>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
      <Temp></Temp>
    </ThemeProvider>
  );
}

export default App;
