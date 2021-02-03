

import * as Action from '../actions/index';

const INITIAL_STATE = { comics: [] };


export default function (state = INITIAL_STATE, action: any) {

  switch (action.type) {
    case Action.APPLY_FETCH_COMICS:

      return { ...state, comics: action.payload.data.results };
    default:
      return state;
  }
}
