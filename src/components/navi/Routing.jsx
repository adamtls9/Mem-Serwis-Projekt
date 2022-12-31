import { Route, Routes } from "react-router-dom";
import HotMemes from "../hot__memes/HotMemes";
import RegularMemes from "../regular__memes/RegularMemes";

const Routing = () => (
  <Routes>
    <Route path="/" element={<RegularMemes />} />
      <Route path="/hot" element={<HotMemes />} />
      <Route path="/regular" element={<RegularMemes />} />
  </Routes>
);

export default Routing;