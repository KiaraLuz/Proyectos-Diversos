import { useState } from "react";
import "./styles.css";

export function StarRating() {
  const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const [escogido, setEscogido] = useState(0);
  const [preEscogido, setPreEscogido] = useState(0);

  function handleColorear(id) {
    if (escogido === id) {
      setEscogido(0);
    } else {
      setEscogido(id);
    }
  }

  function handlePreColorear(id) {
    if (preEscogido === id) {
      setPreEscogido(0);
    } else {
      setPreEscogido(id);
    }
  }

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <div key={star.id} className="star">
          <svg
            onClick={() => handleColorear(star.id)}
            onMouseEnter={() => handlePreColorear(star.id)}
            onMouseLeave={() => handlePreColorear(0)}
            aria-hidden="true"
            fill={
              escogido >= star.id || preEscogido >= star.id
                ? "rgb(243, 227, 0)"
                : "none"
            }
            viewBox="0 0 24 24"
            width="50px"
            height="50px"
            cursor="pointer"
          >
            <path
              stroke="rgb(243, 227, 0)"
              d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
