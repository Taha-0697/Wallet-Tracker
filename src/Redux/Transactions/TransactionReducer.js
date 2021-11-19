import { updateTransactionData } from "../../utility/utility";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./TransactionConstants";

var initialState = [];

var transactionReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_TRANSACTION:
      return [...state, payload.transaction];
    case DELETE_TRANSACTION:
      return state.filter((trans) => trans.id !== payload.transactionId);
    case UPDATE_TRANSACTION:
      return updateTransactionData(
        state,
        payload.transactionId,
        payload.updatedData
      );
    default:
      return state;
  }
};

export default transactionReducer;
