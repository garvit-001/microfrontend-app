import React, { useState, Suspense, lazy } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../utils/style.css";

// Dynamic imports for microfrontends
const Product = lazy(() => import("product/Product"));
const Account = lazy(() => import("account/Accounts"));
const Competitor = lazy(() => import("competitor/Competitor"));
const Dashboard = lazy(() => import("dashboard/Dashboard"));

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderContent = () => {
    switch (selectedComponent) {
      case "product":
        return <Product />;
      case "account":
        return <Account />;
      case "competitor":
        return <Competitor />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="navbar">
        <Sidebar onSelect={setSelectedComponent} />
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
    </div>
  );
};

export default App;
