import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = ({ cards }) => {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <main className="tinder__main">
      {cards.map((card) => (
        <TinderCard
          className="tinder__container"
          key={card.name}
          onSwipe={(dir) => swiped(dir, card.name)}
          onCardLeftScreen={() => outOfFrame(card.name)}
        >
          <div
            style={{ backgroundImage: "url(" + card.url + ")" }}
            className="tinder__imgs"
          >
            <h3 className="tinder__name">{card.name}</h3>
          </div>
        </TinderCard>
      ))}
    </main>
  );
};

export default TinderCards;
