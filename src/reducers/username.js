import { SET_USERNAME } from '../actions/types';

const DEFAULT_USERNAME = 'anonymous';

const usernameReducer = (state = DEFAULT_USERNAME, actions) => {
  switch (actions.type) {
    case SET_USERNAME:
      return actions.username;
    default:
      return state;
  }

}
export default usernameReducer;