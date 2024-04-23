import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
