import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Bio from "./components/Bio"
import Footer from "./components/Footer"

function App() {
  return (
     <div className="App">
    
      <Header />
      <body>
      <Card /><Card /><Card /><Card /><Card /><Card />
      <Bio />
    
      </body>
      <Footer />
    </div>
  );
}

export default App;
