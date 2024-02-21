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
    // 1)This function generates a random card by selecting a rank and a suit using Math methods. 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)The conditional statement checks if the drawn card is not already present in the hand.

    if (hand.indexOf(draw) === -1) {
      // 3)This ensures that only unique cards are added to the hand to prevent duplicates.
    
      setHand([...hand, draw])
      // 4)The hand is updated with the newly drawn card using the spread operator to maintain previous card information.
    
    } else if (hand.length !== 52) {
      // 5) If not all 52 cards have been dealt, the drawCard function is called recursively.
   
      drawCard()
      // 6)his handles the scenario when all other conditions are false, ensuring proper flow control.
   
    } else {
      // 7)n alert is triggered to notify the user when all 52 cards have been dealt.
     
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }
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

