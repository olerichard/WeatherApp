import React, { Component } from 'react';
import Weather from './components/Weather';
import Location from './components/Location';
import Time from './components/Time';
import GetWeather from './actions/GetWeather'
import GetBackground from './actions/GetBackground'
import GetLocation from './actions/GetLocation'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  async componentDidMount() {
    const initState = {}

    initState.location = await GetLocation();
    initState.weather = await GetWeather(initState.location);
    initState.background = await GetBackground(initState.weather)

    this.setState(initState)
  }

  render() {
    const appStyle = {
      height: "200px"
    }

    if (this.state.background != null) {
      document.documentElement.style.background = `url(${this.state.background}) no-repeat center center fixed`;
      document.documentElement.style.backgroundSize = "cover"
    }

    return (
      <div className="App">
        <div style={appStyle}></div>
        {this.state.location == null ? null : <Location location={this.state.location} />}
        {this.state.location == null ? null : <Time />}
        {this.state.weather == null ? null : <Weather state={this.state} />}
      </div>
    );
  }
}

export default App;
