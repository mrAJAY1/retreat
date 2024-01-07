import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Main</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
