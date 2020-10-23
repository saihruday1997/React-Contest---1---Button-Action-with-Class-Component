import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  render() {
    return (
      <>
        <div id="main">{/* Do not remove this main div!! */}</div>
        <button id="click" onClick={() => this.setState({ display: true })}>
          CLICK
        </button>
        {this.state.display && (
          <p id="para">
            {
              "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            }
          </p>
        )}
      </>
    );
  }
}

export default App;
