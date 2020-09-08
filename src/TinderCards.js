import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {
  const [peoples, setPeoples] = React.useState([
    {
      name: "Steve Jobs",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072",
    },
    {
      name: "Richard Henricks",
      url: "https://i.pinimg.com/originals/2d/62/6e/2d626e344c524ae2b9f9df060fce13a5.jpg",
    },
  ]);
  return (
    <div className="tinderCards_cardContainer">
      {peoples.map((person) => (
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
export default TinderCards;
