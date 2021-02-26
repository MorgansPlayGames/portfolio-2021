import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App bg-gray-900 text-gray-200">
      
      <Router>
      <Navbar />
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
