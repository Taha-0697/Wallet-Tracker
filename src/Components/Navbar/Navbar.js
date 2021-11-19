import React from "react";
import { connect } from "react-redux";
import { calculateAmount } from "../../utility/utility";
import "./Navbar.css";

const Navbar = ({ grossAmount }) => {
  console.log(grossAmount);
  return (
    <div className="navbar">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="center">
        <h1>${grossAmount}</h1>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  grossAmount: calculateAmount(state.transaction),
});

export default connect(mapState)(Navbar);
