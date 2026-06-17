import { useEffect, useState } from "react";
import { createTransaction, getTransactions, updateTransaction, deleteTransaction } from "../services/transaction";
import { useNavigate } from "react-router-dom";

interface Transaction {
  id: number;
  type: string;
  category: string;
  description: string;
  amount: number;
}

const TransactionPage = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    type: "expense",
    category: "",
    description: "",
    amount: "",
  });

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions();
      console.log(response.data)

      setTransactions(response.data.transactions || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      type: "expense",
      category: "",
      description: "",
      amount: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
      };

      if (editingId) {
        await updateTransaction(
          editingId,
          payload
        );
      } else {
        await createTransaction(payload);
      }

      fetchTransactions();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (transaction: Transaction) => {
    setEditingId(transaction.id);

    setFormData({
      type: transaction.type,
      category: transaction.category,
      description: transaction.description,
      amount: transaction.amount.toString(),
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTransaction(id);

      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            ← 
          </button>

          <h1 className="text-3xl font-bold">
            Transactions
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-6 space-y-4"
        >
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>
          </select>

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {editingId
              ? "Update Transaction"
              : "Add Transaction"}
          </button>
        </form>

        <div className="bg-white rounded-xl shadow">
          {transactions.length === 0 ? (
            <p className="p-6 text-center">
              No transactions found
            </p>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center border-b p-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {transaction.category}
                  </h3>

                  <p className="text-gray-500">
                    {transaction.description}
                  </p>

                  <span
                    className={
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {transaction.type}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-bold">
                    ₹{transaction.amount}
                  </span>

                  <button
                    onClick={() =>
                      handleEdit(transaction)
                    }
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        transaction.id
                      )
                    }
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default TransactionPage;