import API from "./api";

export const getDashboardSummary = () => {
  return API.get("/dashboard/summary");
};


export const getExpenseByCategory = () => {
  return API.get("/dashboard/category");
};