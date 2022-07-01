// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  switch (action.type) {
    default:
      return state;
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
  }
}
