import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  addReminder() {
    console.log("this", this);

    this.props.actions.addReminder(this.state.text);
  }
  render() {
    console.log("asdfajsbvfdsg", this.props.reminders);
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              value={this.state.text}
              placeholder="I have to"
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Reminder
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state);
  return {
    reminders: state
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
