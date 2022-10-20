import { Component } from "react";
import { connect } from "react-redux";
import { counterActions } from "../store/index";

class ClassBase extends Component {
  incHandler() {
    this.props.increment();
  }
  decHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <>
        <h2>ClassBase Component</h2>
        <h4>{this.props.counter}</h4>
        <button
          className="btn btn-primary"
          onClick={this.incHandler.bind(this)}
        >
          Increment
        </button>{" "}
        <button
          onClick={this.decHandler.bind(this)}
          className="btn btn-primary"
        >
          Decrement
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassBase);
