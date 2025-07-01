import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import MasterPlan from "./pages/MasterPlan/MasterPlan";
import Terms from "./pages/Policies/Terms";
import Disclaimer from "./pages/Policies/Disclaimer";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/master-plan" element={<MasterPlan />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
