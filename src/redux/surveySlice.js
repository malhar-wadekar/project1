import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    answers: {},
  },
  reducers: {
    setAnswer: (state, action) => {
      state.answers[action.payload.id] = action.payload.value;
    },
  },
});

export const { setAnswer } = surveySlice.actions;
export default surveySlice.reducer;
