import React, { Component } from 'react';

// Class component

class SearchBar extends Component {
  // Constructor function is called automatically whenever a new instance is created. Initialize variables, state, etc...
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    );

  }
}

// Functional component

// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
