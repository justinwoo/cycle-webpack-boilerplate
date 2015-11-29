import {div, h1, h} from '@cycle/dom'
import Home from '../dialogue/pages/home/home-index'
import Page1 from '../dialogue/pages/page1/page1-index'
import Page2 from '../dialogue/pages/page2/page2-index'

function routes(sources) {
  return {
    '/cycle-webpack-boilerplate/': div('.home', Home(sources).DOM),
    '/cycle-webpack-boilerplate/page1': div('.Page1',Page1(sources).DOM),
    '/cycle-webpack-boilerplate/page2': div('.Page2',Page2(sources).DOM),
    '*': h1(`Page could not be found`),
  }
}

export default routes
