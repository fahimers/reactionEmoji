import { combineReducers } from 'redux';
import messageReducer from './messages'
import usernameReducer from './username';
import reactionsReducer from './reaction';


export default combineReducers({

  messages: messageReducer,
  username: usernameReducer,
  reactions: reactionsReducer
});
