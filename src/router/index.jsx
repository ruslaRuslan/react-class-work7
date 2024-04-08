import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default WebRouter;
