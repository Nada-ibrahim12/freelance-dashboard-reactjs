import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects/Projects";
import DashboardOverview from "./pages/Dashboard/DashboardOverview";


export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}
