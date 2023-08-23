import { createSlice } from '@reduxjs/toolkit';

//초기 데이터
const initialState = {
  question: {
    title: '질문 제목입니다.',
    content:
      '질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.질문에 대한 내용입니다.',
    upvotes: 10,
    answers: 5,
    views: 100,
    author: {
      username: 'example_user',
      profileUrl: '/user/example_user',
    },
    timestamp: new Date().getTime() - 3600000, // 1시간 전
  },
};

// Redux 슬라이스 생성
const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    incrementViews: (state) => {
      state.question.views += 1;
    },
  },
});

// 액션 생성자를 내보내줍니다.
export const { incrementViews } = questionSlice.actions;

// 리듀서 함수를 내보내줍니다.
export default questionSlice.reducer;

// 선택적으로, "selectQuestion" 함수를 통해 스토어에서 데이터를 선택할 수 있습니다.
export const selectQuestion = (state) => state.question.question;
