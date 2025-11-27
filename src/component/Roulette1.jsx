import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";
import "./Roulette.css"; // ton CSS existant
import logo from "./picture/logo.png";

const Roulette1 = () => {
  const navigate = useNavigate();

  const data = [
    { option: "🌊☀️🌳" },
    { option: "🌊🌊🌳" },
    { option: "☣️" },         // Pollution
    { option: "☀️☀️🌊" },
    { option: "🌳🌳☀️" },
    { option: "💀" },         // Pollution
    { option: "☀️⚙️🌳" },
    { option: "🃏🃏🃏" },       // Joker
    { option: "🦠" },         // Pollution
    { option: "⚙️⚙️🌳" },
    { option: "⚙️☀️🌊" },
    { option: "🏭" },         // Pollution
    { option: "⚙️⚙️🌊" },
    { option: "🃏🃏🃏" },       // Joker
    { option: "☢️" },         // Pollution
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState("");

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="app-container">
      <img src={logo} alt="Logo" className="logo-image" />

      <h1>🎡 Resource wheels</h1>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={[
          "green",
          "green",
          "red",

        ]}
        fontSize={28}
        onStopSpinning={() => {
          setMustSpin(false);
          setWinner(data[prizeNumber].option);
        }}
      />

      <button className="button-spin" onClick={handleSpinClick}>
        Launch the wheel
      </button>

      {/* Modal Popup */}
      {winner && (
        <div className="modal-overlay">
          <div className="modal-content animate-scale-in">
            <h2>🌎 Resource obtained 🌿</h2>
            <p style={{ fontSize: "2rem", margin: "10px 0" }}>{winner}</p>

            {/* Bouton pour aller vers la roulette 2 */}
            <button
              className="modal-close"
              onClick={() => navigate("/roulette2")}
            >
              Continue with the next wheel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roulette1;
