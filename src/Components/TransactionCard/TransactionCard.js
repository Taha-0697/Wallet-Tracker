import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delete_transaction } from "../../Redux/Transactions/TransactionActions";

const TransactionCard = (props) => {
  const {
    transaction: { description, amount, transactionType, id },
    delete_transaction,
  } = props;
  return (
    <div>
      <h1>
        {description} - {amount} - {transactionType}
        <button onClick={() => delete_transaction(id)}>Delete</button>
        <Link to={`/transaction/${id}`}>
          <button>Edit</button>
        </Link>
      </h1>
    </div>
  );
};

const actions = {
  delete_transaction,
};

export default connect(null, actions)(TransactionCard);
