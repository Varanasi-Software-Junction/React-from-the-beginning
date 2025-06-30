
import React, { useState } from 'react';
import { QuizUtilities } from './utils';

export default function QuizPage({ quizName, goBack }) {
  const [, forceUpdate] = useState(0);

  function nextQuestion() {
    forceUpdate(n => n + 1);
  }

  if (QuizUtilities.quizCompleted) {
    return (
      <div>
        <h2>{quizName} - Completed</h2>
        <h3>
          Score: {QuizUtilities.score} / {QuizUtilities.quizData.length}
        </h3>
        <button onClick={() => { QuizUtilities.resetQuiz(); nextQuestion(); }}>
          Restart Quiz
        </button>
        <button onClick={goBack}>Back to Quiz List</button>
      </div>
    );
  }

  const q = QuizUtilities.getCurrentQuestion();

  return (
    <div>
      <h2>{quizName}</h2>
      <h3>
        Q{q.qno}: {q.question}
      </h3>
      <button onClick={() => QuizUtilities.checkAnswer(1, nextQuestion)}>
        {q.opa}
      </button>
      <br />
      <button onClick={() => QuizUtilities.checkAnswer(2, nextQuestion)}>
        {q.opb}
      </button>
      <br />
      <button onClick={() => QuizUtilities.checkAnswer(3, nextQuestion)}>
        {q.opc}
      </button>
      <br />
      <button onClick={() => QuizUtilities.checkAnswer(4, nextQuestion)}>
        {q.opd}
      </button>
      <br />
      {QuizUtilities.feedback && (
        <p style={{ color: 'blue' }}>{QuizUtilities.feedback}</p>
      )}
    </div>
  );
}
