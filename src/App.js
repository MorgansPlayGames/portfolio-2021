import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App bg-gray-900 text-gray-200">
      <Header />
      <CardList />
      <Bio />
      <Footer />
    </div>
  );
}

export default App;
