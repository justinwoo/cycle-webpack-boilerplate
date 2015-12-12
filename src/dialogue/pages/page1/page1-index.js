import Rx from 'rx'
import view from './page1-view'

const Page1 = (newSources) => {
  return {
    DOM: view(newSources.homeState)
  }
}

export default Page1
