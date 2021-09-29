import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
