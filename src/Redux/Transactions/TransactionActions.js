import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./TransactionConstants";

export const addTransaction = (transactionObj) => ({
  type: ADD_TRANSACTION,
  payload: {
    transaction: transactionObj,
  },
});

export const delete_transaction = (transactionId) => ({
  type: DELETE_TRANSACTION,
  payload: {
    transactionId,
  },
});

export const update_transaction = (transactionId, updatedData) => ({
  type: UPDATE_TRANSACTION,
  payload: {
    updatedData,
    transactionId,
  },
});
