
// Component for displaying list of available quizzes

import React, { useEffect, useState } from 'react';
import { QuizUtilities } from './utils';
import QuizPage from './QuizPage';

export default function QuizList() {
  const [quizList, setQuizList] = useState([]);           // List of quizzes
  const [loading, setLoading] = useState(true);           // Loading flag
  const [error, setError] = useState(false);              // Error flag
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Holds selected quiz name

  const quizListUrl = 'https://varanasi-software-junction.github.io/vsjpictures/quizlist.json';

  // Fetch quiz list on component mount
  useEffect(() => {
    fetchQuizList();
  }, []);

  // Fetch the list of available quizzes from server
  async function fetchQuizList() {
    try {
      const response = await fetch(quizListUrl);
      if (response.ok) {
        const data = await response.json();
        setQuizList(data);     // Save quiz list to state
        setLoading(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  // When a quiz is selected, load its questions
  async function handleQuizSelect(quiz) {
    try {
      await QuizUtilities.downloadQuizData(quiz.url);
      setSelectedQuiz(quiz.quizname);  // Show quiz page
    } catch {
      alert('Failed to load quiz');
    }
  }

  // Render loading state
  if (loading) return <h2>Loading...</h2>;

  // Render error state
  if (error) return <h2>Error loading quizzes</h2>;

  // If quiz selected, show QuizPage component
  if (selectedQuiz)
    return <QuizPage quizName={selectedQuiz} goBack={() => setSelectedQuiz(null)} />;

  // Render quiz list
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
