import React from "react";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <h1>Zustand Example</h1>
      <nav>
        <ul>
          <li><Link to="/count">Count</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default App
