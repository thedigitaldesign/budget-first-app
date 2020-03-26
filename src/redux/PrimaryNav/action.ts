// Packages
import axios from 'axios'

// Dispatches
import * as type from '../Types'

// export class PrimaryNavAction {
  export const GetPrimaryNav = () => {
    return (dispatch: any) => {
      dispatch(FetchPrimaryNavRequest())

      axios
        .get('./nav.json')
        .then(response => {
          const nav = response.data
          dispatch(FetchPrimaryNavSuccess(nav))
        })
        .catch(error => {
          dispatch(FetchPrimaryNavFailure(error.message))
        })
    }
  }

  export const FetchPrimaryNavRequest = () => {
    return {
      type: type.PrimaryNav.FETCH_NAV_REQUEST,
    }
  }

  export const FetchPrimaryNavSuccess = (nav: [{}]) => {
    return {
      type: type.PrimaryNav.FETCH_NAV_SUCCESS,
      payload: nav,
    }
  }

  export const FetchPrimaryNavFailure = (error: any) => {
    return {
      type: type.PrimaryNav.FETCH_NAV_FAILURE,
      payload: error,
    }
  }
// }
