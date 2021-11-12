import React from "react";

export default function ProductList({ title, active, setSelect, id }) {
  return (
    <li className={active ? "productList active" : "productList"} onClick={() => setSelect(id)}>
      {title}
    </li>
  );
}
