export default function Card({ title, value, color }) {
    return (
      <div className={`p-6 rounded-xl shadow-lg ${color}`}>
        <h2 className="text-sm text-gray-300">{title}</h2>
        <p className="text-3xl font-bold mt-2">₹{value || 0}</p>
      </div>
    );
  }