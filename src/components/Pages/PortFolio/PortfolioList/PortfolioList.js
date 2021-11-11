import React from "react";
import "./portfolioList.css";

export default function PortfolioList({ title, active, setSelect, id }) {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={() => setSelect(id)}>
      {title}
    </li>
  );
}
