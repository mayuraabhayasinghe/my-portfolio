import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-theme min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
