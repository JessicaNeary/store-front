import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Category from './components/Category'
import Sale from './components/Sale'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='category/:id' component={Category} />
          <Route path='sale' component={Sale} />
        </Route>
      </Router>
    ),
    document.getElementById('app')
  )
})
