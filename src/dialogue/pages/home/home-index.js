import view from './home-view'
import intent from './home-intent'
import model from './home-model'

// returning our DOM
const Home = (sources) => {
  const actions = intent(sources)
  const state$ = model(actions)

  return {
    DOM: view(state$)
  }
}

export default Home
export {Home}
