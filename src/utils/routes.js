import {div, h1, h} from '@cycle/dom'
import Home from '../dialogue/pages/home/home-index'
import Page1 from '../dialogue/pages/page1/page1-index'
import Page2 from '../dialogue/pages/page2/page2-index'

function routes(sources) {
  const home = Home(sources);

  const newSources = Object.assign({}, sources, {
    homeState: home.state.shareReplay(1)
  });

  return {
    '/': div('.home', home.DOM.shareReplay(1)),
    '/page1': div('.Page1',Page1(newSources).DOM.shareReplay(1)),
    '/page2': div('.Page2',Page2(newSources).DOM.shareReplay(1)),
    '*': h1(`Page could not be found`),
  }
}

export default routes
