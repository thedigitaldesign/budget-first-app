// Packages
import { combineReducers } from 'redux'

// Reducers
import { PrimaryNavReducer } from './PrimaryNav/reducer'

export const RootReducer = combineReducers({
  SidebarNav: PrimaryNavReducer,
})
