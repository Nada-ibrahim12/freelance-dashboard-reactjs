import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";


export default function App() {
  return (
    <Router>
      <DashboardLayout>
      </DashboardLayout>
    </Router>
  );
}
