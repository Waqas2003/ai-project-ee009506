import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import BookDetails from './pages/BookDetails';
import AuthorDetails from './pages/AuthorDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/authors" component={Authors} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/authors/:id" component={AuthorDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;