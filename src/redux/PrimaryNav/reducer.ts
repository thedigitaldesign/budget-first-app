import { PrimaryNav as type } from '../Types'

const initialState = {
  loading: false,
  PrimaryNav: [{}],
  error: '',
}

interface action {
  type: string
  payload: any
}

export const PrimaryNavReducer = (state = initialState, action: action) => {
  switch(action.type) {
    case type.FETCH_NAV_REQUEST:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_NAV_SUCCESS:
      return {
        loading: false,
        PrimaryNav: action.payload,
        error: ''
      }
    case type.FETCH_NAV_FAILURE:
      return {
        loading: false,
        PrimaryNav: [{}],
        error: action.payload
      }
    default: return state
  }
}

// export default reducer
