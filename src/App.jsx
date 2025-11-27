import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roulette1 from "./component/Roulette1";
import Roulette2 from "./component/Roulette2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Roulette1 />} />
        <Route path="/roulette2" element={<Roulette2 />} />
      </Routes>
    </Router>
  );
}

export default App;
