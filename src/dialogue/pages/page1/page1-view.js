import {h, div, h1, h2} from '@cycle/dom'

const view = (homeState$) =>
  homeState$.map(count =>
    div([
      h1('.content-subhead',['Page 1']),
      h1([`This is Page 1`]),
      div('.pure-u-1 .counter-table-result',[
        h2('Counter: ' + count)
      ])
    ])
  );

export default view;
