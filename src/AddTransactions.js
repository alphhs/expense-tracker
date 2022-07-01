import { useState } from "react";
import { GlobalContext } from "./GlobalState";
import { useContext } from "react";

const AddTransactions = () => {
  const [text, setText] = useState("");
  const [number, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +number,
    };
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            id="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative-expense,positive-income)
          </label>
          <input
            type="number"
            value={number}
            id="number"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransactions;
