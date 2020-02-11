import React, { Component } from "react";
import "./time.css";

export class time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      time: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };
    setInterval(() => {
      if (this.state.status) {
        this.setState({
          time: this.state.time + 1
        });
      }
      this.convert(this.state.time);
    }, 1000);
  }
  convert = time => {
    this.setState({
      hours: Math.floor(time / 3600),
      minutes: Math.floor((time - this.state.hours * 3600) / 60),
      seconds: time - this.state.hours * 3600 - this.state.minutes * 60
    });
  };
  Click = () => {
    this.setState({ status: !this.state.status });
  };

  Reset = () => {
    this.setState({
      status: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
      time: 0
    });
  };
  render() {
    return (
      <div className="container">
        <div className="full-time-container">
          <p className="timer-form">
            {String(this.state.hours).padStart(2, "0")} :
          </p>
          <p className="timer-form">
            {String(this.state.minutes).padStart(2, "0")} :
          </p>
          <p className="timer-form">
            {String(this.state.seconds).padStart(2, "0")}
          </p>
        </div>
        <div className="name-hms">
          <p className="hms">hours </p>
          <p className="hms">minutes </p>
          <p className="hms">seconds </p>
        </div>
        <div className="btns">
          <button className="btn" onClick={this.Click}>
            {this.state.status ? "Stop" : "Start"}
          </button>
          <button className="btn" onClick={this.Reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default time;
