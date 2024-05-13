import { Suspense } from "react";
import "./index";
import Navbar from "./Components/Navbar";
import Landing from "./Components/LandingPage";
import Projects from "./Components/ProjectsMain";
import HumanityLastGraspShowcase from "./Components/Projects/HumanityLastGraspShowcase";
import SpaceChefsShowcase from "./Components/Projects/SpaceChefsShowcase";
import TongeTiedShowcase from "./Components/Projects/TongeTiedShowcase";
import MitosShowcase from "./Components/Projects/MitosShowcase";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

const loading = () => <div className="">loading....</div>;

function App() {
  return (
    <Suspense fallback={loading}>
      <Navbar />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route
          element={<HumanityLastGraspShowcase />}
          path="/projects/humanity-last-grasp"
        />
        <Route
          element={<SpaceChefsShowcase />}
          path="/projects/Space-chefs-from-space"
        />
        <Route element={<TongeTiedShowcase />} path="/projects/Tonge-tied" />
        <Route element={<MitosShowcase />} path="/projects/Mitos" />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
