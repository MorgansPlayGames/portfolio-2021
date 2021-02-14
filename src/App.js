import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Bio from "./components/Bio"
import Footer from "./components/Footer"


function App() {
  return (
     <div className="App bg-gray-900 text-gray-200">
    
      <Header />
      <body>
      <section className="container flex-wrap">
      <Card /><Card /><Card /><Card /><Card /><Card />
      </section>
      <Bio />
    
      </body>
      <Footer />
    </div>
  );
}

export default App;
