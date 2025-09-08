export default function SalesHistory({ sales }) {
  return (
    <div className="box">
      <h3 className="text-danger">Sale Records</h3>
      <ul className="list-group">
        {sales.map((sale, i) => (
          <li className="list-group-item bg-dark text-white" key={i}>
            ₹{sale.total} — {sale.items} at {sale.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
