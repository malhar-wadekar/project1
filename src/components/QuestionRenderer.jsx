import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckboxInput';

const QuestionRenderer = ({ question }) => {
  switch (question.type) {
    case 'text':
      return <TextInput question={question} />;
    case 'radio':
      return <RadioInput question={question} />;
    case 'checkbox':
      return <CheckboxInput question={question} />;
    default:
      return null;
  }
};

export default QuestionRenderer;
