import { useEffect, useState } from "react";
import API from "../services/Api"; // ⚠️ small fix: lowercase 'api'
import Navbar from "../components/Navbar";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  // fetch transactions
  const fetchTransactions = () => {
    API.get("/transactions")
      .then((res) => setTransactions(res.data))
      .catch(() => alert("Error fetching transactions"));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // create transaction
  const handleAdd = async () => {
    if (!amount || !category) {
      return alert("Please fill all fields");
    }

    try {
      await API.post("/transactions", {
        amount,
        type,
        category,
        note,
      });

      setAmount("");
      setCategory("");
      setNote("");

      fetchTransactions(); // refresh list
    } catch {
      alert("Error adding transaction");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Transactions</h1>

        {/* FORM */}
        <div className="bg-gray-900 p-6 rounded-xl mb-6 shadow">
          <h2 className="mb-4 text-lg">Add Transaction</h2>

          <input
            className="p-2 w-full mb-3 text-black rounded"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="p-2 w-full mb-3 text-black rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            className="p-2 w-full mb-3 text-black rounded"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            className="p-2 w-full mb-3 text-black rounded"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 transition w-full p-2 rounded text-white"
          >
            Add Transaction
          </button>
        </div>

        {/* LIST */}
        <h2 className="mb-4 text-lg">Your Transactions</h2>

        {transactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet</p>
        ) : (
          transactions.map((t) => (
            <div
              key={t._id}
              className="bg-gray-800 p-4 mb-3 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">₹{t.amount}</p>
                <p className="text-sm text-gray-400">
                  {t.category} • {t.note}
                </p>
              </div>

              <div
                className={
                  t.type === "income"
                    ? "text-green-400 font-bold"
                    : "text-red-400 font-bold"
                }
              >
                {t.type}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}