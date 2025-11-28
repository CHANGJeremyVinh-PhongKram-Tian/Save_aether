import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";
import "./Roulette.css"; // ton CSS existant
import logo from "./picture/logo.png";
import metal from "./picture/metal.png";
import sun from "./picture/sun.png";
import wood from "./picture/wood.png";
import water from "./picture/water.png";
import datacenter from "./picture/data_center.png";
import ewaste from "./picture/e-waste.png";
import mine from "./picture/mine.png";
import cloud from "./picture/cloud.png";
import manufacturing from "./picture/manufacturing.png";

const emojiToImage = {
  "⚙": metal,  
  "☀": sun,
  "🌳": wood,
  "🌊": water,
  "💾": datacenter,
  "🗑": ewaste,
  "⛏": mine,
  "☁": cloud,
  "🏭": manufacturing,
};

const stripVariation = (s) => s.replace(/\uFE0F/g, ""); // enlève U+FE0F

const renderResult = (emojiString) => {
  if (!emojiString) return null;

  // Array.from gère correctement les points de code multi-unités
  const graphemes = Array.from(emojiString);

  return graphemes.map((g, i) => {
    const base = stripVariation(g); // ex: "⚙️" -> "⚙"
    const img = emojiToImage[base];

    if (img) {
      return (
        <img
          key={i}
          src={img}
          alt={base}
          style={{
            width: "110px",
            height: "110px",
            margin: "0 8px",
            objectFit: "contain",
          }}
        />
      );
    }

    // si pas d'image correspondante, affiche l'emoji tel quel
    return (
      <span
        key={i}
        style={{
          fontSize: "48px",
          margin: "0 8px",
          lineHeight: 1,
        }}
      >
        {g}
      </span>
    );
  });
};



const Roulette1 = () => {
  const navigate = useNavigate();

  const data = [
    { option: "🌊☀️🌳" },
    { option: "🌊🌊🌳" },
    { option: "🗑" },         
    { option: "☀️☀️🌊" },
    { option: "🌳🌳☀️" },
    { option: "☁" },         
    { option: "☀️⚙️🌳" },
    { option: "🃏🃏🃏" },       
    { option: "⛏" },         
    { option: "⚙️⚙️🌳" },
    { option: "⚙️☀️🌊" },
    { option: "🏭" },        
    { option: "⚙️⚙️🌊" },
    { option: "🃏🃏🃏" },      
    { option: "☢️" },        
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

      <h1>🎡 Resource wheel</h1>

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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {renderResult(winner)}
            </div>


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
