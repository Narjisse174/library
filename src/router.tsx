// src/router.jsx ou src/router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ItemPage from './pages/ItemPage';
import AdvancedSearchPage from './pages/AdvancedSearchPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/item/:id" component={ItemPage} />
        <Route path="/advanced-search" component={AdvancedSearchPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
