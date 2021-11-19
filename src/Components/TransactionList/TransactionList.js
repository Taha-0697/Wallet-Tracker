import React from "react";
import { connect } from "react-redux";
import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionList = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
var mapState = (state) => ({
  transactions: state.transaction,
});

export default connect(mapState)(TransactionList);
