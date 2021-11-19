import React from "react";
import { connect } from "react-redux";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";

const Transaction = ({ transaction }) => {
  console.log(transaction);
  return (
    <div>
      <h1>Info Page</h1>
      {/* <h1>{transactionId}</h1> */}
      <TransactionForm defaultValues={transaction} />
    </div>
  );
};

const mapState = (
  state,
  {
    match: {
      params: { transactionId },
    },
  }
) => ({
  transaction: state.transaction.find((trans) => trans.id === transactionId),
});

export default connect(mapState)(Transaction);
