import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dashboard</h1>
      <p>Yahan se aap apne holdings aur positions dekh sakte ho.</p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/holdings" style={{ marginRight: "15px" }}>
          Holdings
        </Link>
        <Link to="/positions">Positions</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
