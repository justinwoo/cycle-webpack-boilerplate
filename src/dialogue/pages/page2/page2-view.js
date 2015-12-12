import {h, div, h1, h2} from '@cycle/dom'

const view = (homeState$) =>
  homeState$.map(count =>
    div([
      h1('.content-subhead',['Page 2']),
      h1([`Now you are on Page 2`]),
      div('.pure-u-1 .counter-table-result',[
        h2('Counter: ' + count)
      ])
    ])
  );

export default view
