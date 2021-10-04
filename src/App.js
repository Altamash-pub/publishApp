import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
<<<<<<< Updated upstream
import "bootstrap/dist/css/bootstrap.min.css";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCarousel } from "./components/MappingPractice/Mapping";
>>>>>>> Stashed changes

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
      <MyCarousel />
    </div>
  );
};

export default App;
