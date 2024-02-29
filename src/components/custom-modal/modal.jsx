export function Modal({ handleToggleModal, header, body, footer }) {
  return (
    <div id="Modal" className="modal">
      <div className="content">
        <div className="header">
          <h2>{header ? header : "Header"}</h2>
          <span className="close" onClick={() => handleToggleModal()}>
            X
          </span>
        </div>
        <div className="body">
          <h4>{body ? body : "This is our Modal Body"}</h4>
        </div>
        <div className="footer">
          <h5>{footer ? footer : "This is our Modal Footer"}</h5>
        </div>
      </div>
    </div>
  );
}
