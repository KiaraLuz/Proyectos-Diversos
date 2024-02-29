import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export function QrGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function generateQr() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="qr-generator">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Ingrese un valor"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={generateQr}
        >
          Generate
        </button>
      </div>
      <div className="qr-code">
        <QRCode id="qr-code-value" value={qrCode} size={300} />
      </div>
    </div>
  );
}
