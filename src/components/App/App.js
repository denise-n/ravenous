import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      businesses: []
    }
  }
  
  searchYelp = (term, location, sortBy) => {
    return (
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({
        businesses
      })
    }))
  }

  render () {
    const { businesses } = this.state
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} /> 
      </div>
    )
  }
}
  
export default App;
