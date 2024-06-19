import Card from "./components/Card";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" desc="lorem haof jaoisfj jsdfjasdof jaoj" />
        <Card title="card 2" desc="lorem haof jaoisfj jsdfjasdof jaoj"/>
        <Card title="card 3" desc="lorem haof jaoisfj jsdfjasdof jaoj"/>
        <Card title="card 4" desc="lorem haof jaoisfj jsdfjasdof jaoj"/>
      </div>
      <Counter/>
      <Footer />
    </>
  );
}

export default App;
