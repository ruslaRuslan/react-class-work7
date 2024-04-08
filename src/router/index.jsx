import { Router, Route } from "react-router";

const WebRouter = () => {
  return (
    <Router>
      <Route path="/" element={<div>salam home page</div>} />
      <Route path="/about" element={<div>salam about page</div>} />
    </Router>
  );
};
export default WebRouter;
