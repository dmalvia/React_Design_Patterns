import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./hoc/withAuth";

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  const AuthenticatedProfile = withAuth(Profile);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher Order Component</h1>
                <div>Login page for unauthenticated users</div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
