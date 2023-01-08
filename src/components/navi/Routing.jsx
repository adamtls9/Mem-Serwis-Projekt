import {Route, Routes } from "react-router-dom";
import HotMemes from "../hot__memes/HotMemes";
import RegularMemes from "../regular__memes/RegularMemes";
import Form from "../form/Form";

const Routing = () => (
  <Routes>
    <Route path="/" element={<RegularMemes />} />
      <Route path="/top" element={<HotMemes />} />
      <Route path="/home" element={<RegularMemes />} />
      <Route path="/form" element={<Form />} />
  </Routes>
);

export default Routing;