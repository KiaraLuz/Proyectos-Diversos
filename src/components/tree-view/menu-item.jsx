import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <svg
                aria-hidden="true"
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" d="M5 12h14" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" d="M5 12h14m-7 7V5" />
              </svg>
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
