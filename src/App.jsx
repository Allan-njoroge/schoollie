import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutePaths from "./routes/RoutePaths";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <RoutePaths />
      <Footer />
    </Router>
  );
}

export default App;