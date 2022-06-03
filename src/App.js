import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import TinderCards from "./componenets/TinderCards";
import axios from "./axios";
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/tinder/cards");
        setCards(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="app">
      <Header />
      <TinderCards cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
