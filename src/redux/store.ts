// Packages
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Combine Reducers
import { RootReducer } from './RootReducer'

export const Store = createStore(RootReducer, applyMiddleware(logger, thunk))
