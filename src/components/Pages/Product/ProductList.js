import React from "react";

export default function ProductList({ title, active, setSelect, id }) {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={() => setSelect(id)}>
      {title}
    </li>
  );
}
