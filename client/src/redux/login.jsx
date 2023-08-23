// loginReducer.js
import {
  LOG_OUT,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
} from './actions.jsx';

const initialState = {
  user: null,
  status: null,
};

const loginReducer = (state = initialState, action) => {
  let user;
  switch (action.type) {
    case LOG_OUT:
      return { ...state, user: null };
    case LOGIN_PENDING:
      return { ...state, status: 'Loading' };
    case LOGIN_FULFILLED:
      user = action.payload;
      console.log(user);
      return { ...state, user: user, status: null };
    case LOGIN_REJECTED:
      return { ...state, status: 'Fail' };
    default:
      return state;
  }
};

export default loginReducer;
