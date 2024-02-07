import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1)create draw card function 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)select random elements from the array 
    if (hand.indexOf(draw) === -1) {
      // 3)checks to see if an card can be added to the hand 
      setHand([...hand, draw])
      // 4)updates the hand and adds new card to the end of array
    } else if (hand.length !== 52) {
      // 5)checks to see if anymore cards can be drawn
      drawCard()
      // 6)draw card until hand is full
    } else {
      // 7)no more cards can be dealt
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {}
    setHand([]);
  return (
    <div>
      <h1>Draw a Card</h1>
        <button onClick={drawCard}>Click to Draw a Card</button>
    
    <button> onClick={shuffle}Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </div>
  )
}

export default App;

