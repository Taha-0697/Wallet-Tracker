import React from "react";
import TransactionForm from "../../Components/TransactionForm/TransactionForm";
import TransactionList from "../../Components/TransactionList/TransactionList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div></div>
      <div>
        <h1>Home Page</h1>
      </div>

      <div>
        <TransactionForm />
      </div>

      <div>
        <TransactionList />
      </div>
    </div>
  );
};

export default Home;
