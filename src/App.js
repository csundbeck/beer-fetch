import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => this.setState({beers}))
        .then(console.log)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>{this.state.beers.map((beer, index) => <li key={index}>
                                          <img alt="beer_image" src={beer.image_url}></img>
                                          <p class='beer-name'>{beer.name}</p>
                                          <p>{beer.tagline}</p>
                                          </li>)}
        </ul>
        </header>
      </div>
    );
  }
}

export default App;
