import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login.jsx';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
