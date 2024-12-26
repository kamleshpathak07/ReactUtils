import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutingComponent from "./RoutingComponent";
import Footer from "./Footer";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutingComponent />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
