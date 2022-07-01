import { GlobalContext } from "./GlobalState";
import { useContext } from "react";
const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {transaction.amount > 0 && "+"}
        {transaction.amount}$
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactions(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
