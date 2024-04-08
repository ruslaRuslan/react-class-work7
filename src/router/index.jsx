import { Routes, Route } from "react-router";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>salam home page</div>} />
      <Route path="/about" element={<div>salam About page</div>} />
    </Routes>
  );
};
export default WebRouter;
