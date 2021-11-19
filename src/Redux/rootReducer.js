import { combineReducers } from "redux";
import transactionReducer from "./Transactions/TransactionReducer";

var rootReducer = combineReducers({
  transaction: transactionReducer,
});

export default rootReducer;
