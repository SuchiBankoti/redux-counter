import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, RESET } from "../Redux-Comp/Actions";
const Bar = ({ count, dispatch }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="row-1">
          <h1>Counter</h1>
        </div>
        <div className="row-2">{count}</div>
        <div className="row-3">
          <div className="col" onClick={() => dispatch({ type: INCREASE })}>
            +
          </div>
          <div className="col" onClick={() => dispatch({ type: RESET })}>
            reset
          </div>
          <div className="col" onClick={() => dispatch({ type: DECREASE })}>
            -
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}
export default connect(mapStateToProps)(Bar);
