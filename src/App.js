import "./App.css";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
