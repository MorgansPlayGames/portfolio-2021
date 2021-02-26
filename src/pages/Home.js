import react from "react";
import Header from "../components/Header"; 
import CardList from "../components/CardList";
import Bio from "../components/Bio"

function Home() {
  return <main>
      <Header />
      <CardList />
      <Bio />
  </main>;
}

export default Home;
