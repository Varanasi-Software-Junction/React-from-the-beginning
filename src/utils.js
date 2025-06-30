
export const QuizUtilities = {
  quizData: [],
  currentQuestionIndex: 0,
  score: 0,
  quizCompleted: false,
  feedback: '',

  async downloadQuizData(quizUrl) {
    try {
      const response = await fetch(quizUrl);
      if (response.ok) {
        this.quizData = await response.json();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.quizCompleted = false;
        this.feedback = '';
      } else {
        throw new Error('Failed to load quiz');
      }
    } catch (error) {
      throw new Error('Error: ' + error.message);
    }
  },

  getCurrentQuestion() {
    return this.quizData[this.currentQuestionIndex];
  },

  checkAnswer(selected, onNext) {
    const correct = this.quizData[this.currentQuestionIndex].correctanswer;
    if (selected.toString() === correct) {
      this.score++;
      this.feedback = '✅ Correct!';
    } else {
      this.feedback = '❌ Wrong!';
    }

    setTimeout(() => {
      this.feedback = '';
      if (this.currentQuestionIndex < this.quizData.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizCompleted = true;
      }
      onNext();
    }, 1000);
  },

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
    this.feedback = '';
  },
};
