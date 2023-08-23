import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './QuestionSlice';

const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});

export default store;
