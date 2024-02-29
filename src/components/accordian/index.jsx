import { useState } from "react";
import data from "./data";
import "./styles.css";

export function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enabledMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnabledMultiSelection(!enabledMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enabledMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enabledMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
