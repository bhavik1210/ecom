import {createStore} from 'redux'
import Mainreducers from './Redux/Mainreduers'

const Store = createStore(Mainreducers)

export default Store