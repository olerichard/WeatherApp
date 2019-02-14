import React from 'react'

const Location = ({ location }) => {
  const style = {
    color: "white",
    fontSize: "100px",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    fontFamily: "'Overpass Mono', monospace",
    WebkitTextStroke: "1px black"
  }

  return (<p style={style}>{location.toUpperCase()}</p>)
}

export default Location