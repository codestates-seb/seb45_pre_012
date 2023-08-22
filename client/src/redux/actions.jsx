// actions.js
import axios from 'axios';
import { addLocalStorage, removeLocalStroage } from './localStorage.jsx';

// Action Types
export const LOG_OUT = 'login/LOG_OUT';
export const LOGIN_PENDING = 'login/LOGIN_PENDING';
export const LOGIN_FULFILLED = 'login/LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'login/LOGIN_REJECTED';

// Action Creators
export const logOut = () => ({
  type: LOG_OUT,
});

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginFulfilled = (user) => ({
  type: LOGIN_FULFILLED,
  payload: user,
});

export const loginRejected = () => ({
  type: LOGIN_REJECTED,
});

// Thunk
export const loginAction = (payload) => async (dispatch) => {
  try {
    dispatch(loginPending());

    const response = await axios.post(
      'http://localhost:8000/users/login',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const user = {
      token: response.headers.authorization,
    };

    addLocalStorage(user);
    dispatch(loginFulfilled(user));
  } catch (error) {
    dispatch(loginRejected());
  }
};

// 로그아웃 버튼 시 작동하는 로그아웃 액션
export const logoutAction = () => async (dispatch) => {
  try {
    // 로그아웃 시 로컬 스토리지에서 사용자 정보 삭제
    removeLocalStroage();
    dispatch(logOut()); // logOut 액션 디스패치
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
