import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter basename="/react/">
      <div className="content">
        <div>React app</div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-1">Page 1</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/page-1">
          <div>Page 1</div>
        </Route>

        <Route path="/page-2">
          <div>Page 2</div>
        </Route>

        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
