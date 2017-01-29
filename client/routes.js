import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Products from './components/Products';
import Header from './components/Header';

const App = ({ children }) => (
  <div className="app">
    <Header />
    <div className="page">
      { children }
    </div>
  </div>
);

const Home = () => (
  <div className="hero">
    <div className="hero-content">
      <h1>SUPARKASSEN.SE</h1>
      <h3>När du vill | Var du vill</h3>
      <button onClick={() => browserHistory.push('/products') }>BÖRJA HANDLA</button>
    </div>
  </div>
);

const About = () => (
  <div className="products">
    <h1>About Page</h1>
  </div>
);

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>,
    document.getElementById('app')
  );
});
