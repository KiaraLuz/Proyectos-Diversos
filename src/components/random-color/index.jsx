import { useState } from "react";
import "./styles.css";

export function RandomColor() {
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    setColor(
      `rgb(${randomColorUtility(256)}, ${randomColorUtility(
        256
      )}, ${randomColorUtility(256)})`
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="wrap">
        <button
          className="color"
          onClick={() => {
            handleCreateRandomHexColor();
          }}
        >
          Create HEX Color
        </button>
        <button
          className="color"
          onClick={() => {
            handleCreateRandomRGBColor();
          }}
        >
          Create RGB Color
        </button>
      </div>

      <h1 className="texto-color">{color}</h1>
    </div>
  );
}
