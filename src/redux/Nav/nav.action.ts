import * as dispatch from '../dispatch'

const initialState = {
  loading: false,
  nav: [],
  error: '',
}

export default class Nav {
  public FetchNavRequest = () => {
    return {
      type: dispatch.nav.FETCH_NAV_REQUEST,
    }
  }

  FetchNavSuccess = (nav: [{}]) => {
    return {
      type: dispatch.nav.FETCH_NAV_SUCCESS,
      payload: nav,
    }
  }

  FetchNavFailure = (error: any) => {
    return {
      type: dispatch.nav.FETCH_NAV_FAILURE,
      payload: error,
    }
  }
}
