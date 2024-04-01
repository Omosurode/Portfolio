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
        <Route
          element={
            <div>
              <h1 className="pt-20">Projects page</h1>
            </div>
          }
          path="/projects"
        />
      </Routes>
    </Suspense>
  );
}

export default App;
