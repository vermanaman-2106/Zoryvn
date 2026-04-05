import { useEffect, useState } from "react";
import API from "../services/Api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("/dashboard/summary")
      .then(res => setData(res.data))
      .catch(() => alert("Error"));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6">
          <Card title="Total Income" value={data.totalIncome} color="bg-green-600" />
          <Card title="Total Expense" value={data.totalExpense} color="bg-red-600" />
          <Card title="Net Balance" value={data.netBalance} color="bg-blue-600" />
        </div>
      </div>
    </div>
  );
}