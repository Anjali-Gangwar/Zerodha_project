import React, { useEffect, useState } from "react";
import API from "../../api/axios";

function Holdings() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await API.get("/allHoldings");
        setHoldings(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    };
    fetchHoldings();
  }, []);

  return (
    <div>
      <h2>My Holdings</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>Net</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h, index) => (
            <tr key={index}>
              <td>{h.name}</td>
              <td>{h.qty}</td>
              <td>{h.avg}</td>
              <td>{h.price}</td>
              <td>{h.net}</td>
              <td>{h.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Holdings;
