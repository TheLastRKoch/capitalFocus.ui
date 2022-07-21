import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

//Components
// import Base from "./components/Base/Base";
// import Budget from "./components/layout/";
import Layout from "./layout/Layout";

// Pages
import Budget from "./pages/Budget"

function App() {
  return (
    <Layout>
      <Container>
      <Routes>
        <Route path="/budget" element={<Budget/>}/>
      </Routes>
      </Container>
    </Layout>
  );
}

export default App;
