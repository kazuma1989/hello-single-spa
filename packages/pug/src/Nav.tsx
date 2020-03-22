import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

function Nav() {
  return (
    <BrowserRouter basename="/">
      <Link to="/">Home</Link>
      {' / '}
      <Link to="/cycle-js/">Cycle.js</Link>
      {' / '}
      <Link to="/react/">React</Link>
    </BrowserRouter>
  )
}

const root = document.getElementById('app-nav')!

export async function mount() {
  ReactDOM.render(<Nav />, root)

  _unmount = () => {
    ReactDOM.unmountComponentAtNode(root)
  }
}

let _unmount: () => void
export async function unmount() {
  _unmount()
}
