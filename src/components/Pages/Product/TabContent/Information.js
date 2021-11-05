import React from "react";
import { Table } from "react-bootstrap";

export default function Information() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Review</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Clothes Fashion</td>
            <td>11</td>
            <td>233</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
