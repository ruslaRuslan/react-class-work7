import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default WebRouter;
