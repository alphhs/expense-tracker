import Header from "./components/Header";
import Balance from "./Balance";
import IncomeExpenses from "./incomeExpenses";
import TransactionList from "./TransactionList";
import AddTransactions from "./AddTransactions";
import { GlobalProvider } from "./GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
