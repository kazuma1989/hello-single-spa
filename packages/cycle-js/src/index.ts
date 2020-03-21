import xs, { Stream } from 'xstream'
import { run } from '@cycle/run'
import { makeDOMDriver, DOMSource, VNode, div } from '@cycle/dom'
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

const drivers = {
  DOM: makeDOMDriver('#root'),
}

let dispose: ReturnType<typeof run>

export async function mount() {
  dispose = run(main, drivers)
}

export async function unmount() {
  dispose()
}
