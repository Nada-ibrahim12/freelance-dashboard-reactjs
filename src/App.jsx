import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";



export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {/* <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}
