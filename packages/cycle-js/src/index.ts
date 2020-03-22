import xs, { Stream } from 'xstream'
import { run } from '@cycle/run'
import { makeDOMDriver, DOMSource, VNode, div } from '@cycle/dom'
import { insertStyleSheet } from './util'
import HelloInput from './HelloInput'

type Sources = {
  DOM: DOMSource
}

type Sinks = {
  DOM: Stream<VNode>
}

function main({ DOM }: Sources): Sinks {
  const helloInputDom1$ = HelloInput({
    DOM,
    props: { className: '.foo' },
  }).DOM
  const helloInputDom2$ = HelloInput({
    DOM,
    props: { className: '.bar' },
  }).DOM

  return {
    DOM: xs
      .combine(helloInputDom1$, helloInputDom2$)
      .map(([helloInputDom1, helloInputDom2]) =>
        div('.ui.container', [
          div(
            {
              attrs: {
                style: 'margin-top: 5rem;',
              },
            },
            [helloInputDom1],
          ),
          div(
            {
              attrs: {
                style: 'margin-top: 3rem;',
              },
            },
            [helloInputDom2],
          ),
        ]),
      ),
  }
}

const appRoot = document.getElementById('app-root')
const drivers = {
  DOM: makeDOMDriver(appRoot),
}

export async function mount() {
  const [remove, loading] = insertStyleSheet(
    'https://unpkg.com/semantic-ui@2.4.2/dist/semantic.min.css',
  )
  await loading

  const dispose = run(main, drivers)

  _unmount = () => {
    dispose()
    remove()
  }
}

let _unmount: () => void
export async function unmount() {
  _unmount()
}
