import React from "react";
import { useState } from "react";

//styling
import "./App.css";

function App() {
  const [userNumber, setUserNumber] = useState();

  const [random, setRandom] = useState(Math.floor(Math.random() * 100 + 1));

  const [attempts, setAttempts] = useState(0);

  const [clickedNumber, setclickedNumber] = useState();

  const [gameOver, setGameOver] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length < 3 || event.target.value == 100) {
      setUserNumber(event.target.value);
    }
  };

  const compare = () => {
    if (userNumber != "") {
      setclickedNumber(userNumber);

      setAttempts(attempts + 1);
      if (attempts == 5) {
        setGameOver(true);
        reset();
      } else {
        setGameOver(false);
      }

      setUserNumber("");
    }
  };

  const reset = () => {
    setRandom(Math.floor(Math.random() * 100 + 1));
    setAttempts(0);
    setUserNumber();
    setclickedNumber();
  };

  const fullAttempt = () => {
    reset();
    setGameOver(false);
  };
  console.log("randomNumber", random);

  return (
    <div className="container">
      <h1>
        Katkoot Monster <br />
        stirs beneath the tumultuous waves, thinking of a number that will end
        the world{" "}
      </h1>
      <h2>Find the secret number and use it to banish The Katkoot Monster</h2>
      <input
        placeholder="1 - 100"
        type="number"
        min="1"
        maxLength="3"
        required
        value={userNumber}
        onChange={handleChange}
        style={{ maxLength: 3 }}
      />
      <br />
      <br />
      <button type="submit" onClick={compare}>
        banish
      </button>{" "}
      <br />
      <br />
      <button type="reset" onClick={fullAttempt}>
        Reset
      </button>
      <br />
      {clickedNumber > random ? <b> too strong </b> : <p></p>}
      {clickedNumber < random ? <b> too weak </b> : <p></p>}
      {clickedNumber == random ? <b> "Correct Answer" </b> : <p> </p>}
      <div>{gameOver && <b> Game over </b>}</div>
      <b> attempts : {attempts} </b>
    </div>
  );
}

export default App;
