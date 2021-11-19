import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { v4 as uuid } from "uuid";
import {
  addTransaction,
  update_transaction,
} from "../../Redux/Transactions/TransactionActions";

class TransactionForm extends React.Component {
  state = {
    description: this.props.defaultValues
      ? this.props.defaultValues.description
      : "",
    amount: this.props.defaultValues ? this.props.defaultValues.amount : 0,
    transactionType: this.props.defaultValues
      ? this.props.defaultValues.transactionType
      : "expense",
  };

  // dynamic e-computation
  handleFormInput = (e) => {
    var { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.props.defaultValues) {
      //update
      const {
        match: {
          params: { transactionId },
        },
        update_transaction,
        history: { goBack },
      } = this.props;
      update_transaction(transactionId, this.state);
      goBack();
    } else {
      //add
      var transactionObj = {
        ...this.state,
        amount: parseInt(this.state.amount),
        id: uuid(),
      };
      this.props.addTransaction(transactionObj);
    }
  };

  // handleDescriptionInput = (e) => {
  //   var value = e.target.value;
  //   this.setState({
  //     desciption: value,
  //   });
  // };

  // handleAmountInput = (e) => {
  //   var value = e.target.value;
  //   this.setState({
  //     amount: value,
  //   });
  // };

  // handleTransactionTypeInput = (e) => {
  //   var value = e.target.value;
  //   this.setState({
  //     transactionType: value,
  //   });
  // };

  render = () => {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="description"
            value={this.state.description}
            type="text"
            placeholder="Description"
            onChange={this.handleFormInput}
          />

          <input
            name="amount"
            value={this.state.amount}
            type="number"
            placeholder="Amount"
            onChange={this.handleFormInput}
          />

          <select
            name="transactionType"
            onChange={this.handleFormInput}
            value={this.state.transactionType}
          >
            <option>Expense</option>
            <option>Income</option>
          </select>

          {this.props.defaultValues ? (
            <button>Update</button>
          ) : (
            <button>Add</button>
          )}
        </form>
      </div>
    );
  };
}

var actions = {
  addTransaction,
  update_transaction,
};

export default connect(null, actions)(withRouter(TransactionForm));
