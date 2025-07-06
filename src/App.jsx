import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import QuestionRenderer from './components/QuestionRenderer';
import { Button } from '@mui/material';

const surveyData = {
  title: "Customer Feedback Survey",
  surveyId: 1,
  render: "single",
  questions: [
    {
      id: 1,
      type: "text",
      label: "What is your name?"
    },
    {
      id: 2,
      type: "radio",
      label: "How satisfied are you with our service?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"]
    },
    {
      id: 3,
      type: "checkbox",
      label: "Which features do you use the most?",
      options: ["Billing", "Customer Support", "Product Search", "Order Tracking"]
    }
  ]
};

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '2rem' }}>
        <h1>{surveyData.title}</h1>
        {surveyData.questions.map(q => (
          <div key={q.id} style={{ marginBottom: '2rem' }}>
            <QuestionRenderer question={q} />
          </div>
        ))}
        <Button variant="contained" color="primary">Submit</Button>
      </div>
    </Provider>
  );
};

export default App;
