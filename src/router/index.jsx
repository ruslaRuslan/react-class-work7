import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
export default WebRouter;
