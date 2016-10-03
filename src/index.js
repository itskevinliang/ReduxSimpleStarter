import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyCjx_HQ0wectVvsThbzWyyeL71iOt6H8lU';

// Create a new component. This componenet should produce some HTML.
const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector(".container"));
