import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Catalog from "../components/Catalog";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  );
}

export default App;
