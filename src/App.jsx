import "./Travel.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { data } from "./data";

function App() {
  const cards = data.map((item) => {
    return <Hero key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
