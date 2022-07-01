import { useContext } from "react";
import { GlobalContext } from "./GlobalState";
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const incomelist = amounts.filter((item) => item > 0);
  const incomeTotal = incomelist
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenseList = amounts.filter((item) => item < 0);
  const expenseTotal = expenseList
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +{incomeTotal}$
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expenseTotal}$
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
