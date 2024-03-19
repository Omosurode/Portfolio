import { Suspense } from "react";
import "./index";
import Navbar from "./Components/Navbar";
import Landing from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";

const loading = () => <div className="">loading....</div>;

function App() {
  return (
    <Suspense fallback={loading}>
      <Navbar />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<h1 className="">Projects page</h1>} path="/Projects" />
      </Routes>
    </Suspense>
  );
}

export default App;
