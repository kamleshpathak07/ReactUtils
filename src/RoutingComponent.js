import { Routes, Route } from "react-router-dom";
import Home from "./Component/Layout/Home";
import About from "./Component/Layout/About";
import StopWatch from "./Component/Layout/StopWatch";
import TextUtil from "./Component/Layout/TextUtil";
import NotFound from "./Component/Layout/NotFound";
export default function RoutingComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about-us" element={<About />}></Route>
      <Route path="/stopwatch" element={<StopWatch />}></Route>
      <Route path="/textutil" element={<TextUtil />}></Route>
      {/* <Route path="*" element={<NotFound />}></Route> */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
