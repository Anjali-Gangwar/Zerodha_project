import React, { useEffect, useState } from "react";
import API from "../../api/axios";

function Positions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await API.get("/allPositions");
        setPositions(res.data);
      } catch (err) {
        console.error("Error fetching positions:", err);
      }
    };
    fetchPositions();
  }, []);

  return (
    <div>
      <h2>My Positions</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>Net</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((p, index) => (
            <tr key={index}>
              <td>{p.product}</td>
              <td>{p.name}</td>
              <td>{p.qty}</td>
              <td>{p.avg}</td>
              <td>{p.price}</td>
              <td>{p.net}</td>
              <td>{p.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
