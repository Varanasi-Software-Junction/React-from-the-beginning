
import React, { useEffect, useState } from 'react';
import { QuizUtilities } from './utils';
import QuizPage from './QuizPage';

export default function QuizList() {
  const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const quizListUrl = 'https://varanasi-software-junction.github.io/vsjpictures/quizlist.json';

  useEffect(() => {
    fetchQuizList();
  }, []);

  async function fetchQuizList() {
    try {
      const response = await fetch(quizListUrl);
      if (response.ok) {
        const data = await response.json();
        setQuizList(data);
        setLoading(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  async function handleQuizSelect(quiz) {
    try {
      await QuizUtilities.downloadQuizData(quiz.url);
      setSelectedQuiz(quiz.quizname);
    } catch {
      alert('Failed to load quiz');
    }
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading quizzes</h2>;

  if (selectedQuiz)
    return <QuizPage quizName={selectedQuiz} goBack={() => setSelectedQuiz(null)} />;

  return (
    <div>
      <h1>Select Quiz</h1>
      <ul>
        {quizList.map((quiz, index) => (
          <li key={index}>
            <button onClick={() => handleQuizSelect(quiz)}>
              Quiz {quiz.quizno}: {quiz.quizname}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
