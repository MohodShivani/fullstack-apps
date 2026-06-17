import API from "./api";

export const createTransaction = (data: {
  type: string;
  category: string;
  description: string;
  amount: number;
}) => {
  return API.post("/transactions", data);
};

export const getTransactions = () => {
  return API.get("/transactions");
};

export const updateTransaction = (
  id: number,
  data: {
    type: string;
    category: string;
    description: string;
    amount: number;
  }
) => {
  return API.put(`/transactions/${id}`, data);
};

export const deleteTransaction = (id: number) => {
  return API.delete(`/transactions/${id}`);
};