import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Contact from "./views/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
