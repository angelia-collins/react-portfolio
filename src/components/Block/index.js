import React from "react";
import "./style.css";

const Block = ({ children }) => {
    return (
      <div className="the-outside">
<section className="container">
    <span className="d-block p-2 border" style={{backgroundColor: "white", color: "grey"}}>
      <div className="extraspace">
      {children}
      </div>
    </span>
  </section>
  </div>
  );
};
export default Block;
