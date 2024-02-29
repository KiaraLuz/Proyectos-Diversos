import { useState } from "react";
import "./styles.css";

export function ImagenSlider() {
  const images = [
    "https://pm1.aminoapps.com/8263/e8ee12b4660a005c3424f080c1ef56aec9b29e75r1-735-735v2_uhq.jpg",
    "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/26/one-piece-trafalgar-law.jpeg",
    "https://i.pinimg.com/736x/33/2c/2e/332c2e13006de42f196eb0f5f0e85dc9.jpg",
    "https://i.pinimg.com/736x/df/ed/be/dfedbe36166028cbb2691ccedef94fd6.jpg",
    "https://www.opgt.it/wp-content/uploads/2018/07/trafalgar-d-water-law-1024x576.jpg",
  ];

  const [slider, setSlider] = useState(0);

  function prevImg() {
    if (slider < 1) {
      setSlider(4);
    } else {
      setSlider(slider - 1);
    }
  }
  function nextImg() {
    if (slider > 3) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  }

  function goImg(key) {
    setSlider(key);
  }

  return (
    <div className="image-slider">
      <div className="content">
        <div>
          <div onClick={prevImg}>
            <svg
              className="arrow-left"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              width="50px"
            >
              <path stroke="currentColor" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </div>
          <div onClick={nextImg}>
            <svg
              className="arrow-right"
              onClick={() => nextImg}
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              width="50px"
            >
              <path stroke="currentColor" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </div>
        </div>
        <img src={images[slider]} alt="" />
        <div className="circles">
          {images.map((image, key) => (
            <div
              className={`circle ${key === slider ? "activate" : ""}`}
              onClick={() => goImg(key)}
              key={key}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
