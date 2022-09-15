import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css"

//Components
import Layout from "./layout/Layout";

// Pages
import UncategorizedItems from "./pages/UncategorizedItems";
import BudgetManagement from "./pages/BudgetManagement"
import Dasboard from "./pages/Dasboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Layout>
      <Container className="App">
      <Routes>
        <Route path="/budgetManagement" element={<BudgetManagement/>}/>
        <Route path="/uncategorizedItems" element={<UncategorizedItems/>}/>
        <Route path="/" element={<Dasboard/>}/>
        <Route component={NotFound} />
      </Routes>
      </Container>
    </Layout>
  );
}

export default App;
