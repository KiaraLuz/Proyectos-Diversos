import { useState } from "react";

export function Tabs({ tabsContent, onChange }) {
  const [tabIndex, setTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${tabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[tabIndex] && tabsContent[tabIndex].content}
      </div>
    </div>
  );
}
