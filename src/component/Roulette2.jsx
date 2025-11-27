import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";
import "./Roulette.css"; // ton CSS existant
import logo from "./picture/logo.png";

const Roulette2 = () => {
  const navigate = useNavigate();

  const data = [
    { option: "1" },
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "6" },
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
      <image src="/logo.png" alt="Logo" className="logo-image" />
      <img src={logo} alt="Logo" className="logo-image" />
      <h1>🎡 Number wheel</h1>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#FFB6C1", "#87CEFA", "#90EE90", "#FFD700", "#FFA500", "#DDA0DD"]}
        textColors={["black"]}
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
            <h2>Result</h2>
            <p style={{ fontSize: "2rem", margin: "10px 0" }}>{winner}</p>

            {/* Bouton pour rediriger */}
            <button
              className="modal-close"
              onClick={() => navigate("/")}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roulette2;
