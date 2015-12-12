import Rx from 'rx'
import view from './page2-view'

const Page2 = (newSources) => {
  return {
    DOM: view(newSources.homeState)
  }
}

export default Page2
