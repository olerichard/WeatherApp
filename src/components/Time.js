import React, { Component } from 'react'

export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
      date: ""
    }
  }

  componentDidMount() {

    const initState = {
      time: this.getTime(),
      date: this.getDate()
    };

    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

    this.setState(initState);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: this.getTime(),
      date: this.getDate()
    });
  }

  getTime() {
    const date = new Date();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    return `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`
  }

  getDate() {
    const date = new Date();
    const options = { weekday: 'long', year: '2-digit', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('no-NO', options)
  }

  style = {
    color: "white",
    fontSize: "40px",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    fontFamily: "'Overpass Mono', monospace",
    WebkitTextStroke: "1px black"
  }


  render() {
    return (
      <div>
        <p style={this.style}>{this.state.date}, {this.state.time} </p>
      </div>
    )
  }


}







