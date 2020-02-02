import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home_page';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Home = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

Meteor.startup(() => {
  // React render call
  ReactDOM.render(<Home />, document.getElementById('render-target'));
});

export default Home;