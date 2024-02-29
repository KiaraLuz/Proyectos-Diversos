export function Suggestions({ data, handleClick }) {
  return (
    <div className="suggestions">
      {data && data.length
        ? data.map((item, index) => (
            <span onClick={handleClick} key={index}>
              {item}
            </span>
          ))
        : null}
    </div>
  );
}
