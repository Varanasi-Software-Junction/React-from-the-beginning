
// Utility class for managing quiz state and logic
export const QuizUtilities = {
  quizData: [],                 // Array to hold quiz questions
  currentQuestionIndex: 0,       // Tracks the current question index
  score: 0,                      // Tracks the score
  quizCompleted: false,          // Flag to indicate if quiz is completed
  feedback: '',                  // Feedback message (Correct/Wrong)

  // Download quiz data from given URL
  async downloadQuizData(quizUrl) {
    try {
      const response = await fetch(quizUrl);
      if (response.ok) {
        this.quizData = await response.json();   // Parse and save quiz data
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

  // Get the current question based on index
  getCurrentQuestion() {
    return this.quizData[this.currentQuestionIndex];
  },

  // Check if selected answer is correct and update feedback and score
  checkAnswer(selected, onNext) {
    const correct = this.quizData[this.currentQuestionIndex].correctanswer;
    if (selected.toString() === correct) {
      this.score++;
      this.feedback = '✅ Correct!';
    } else {
      this.feedback = '❌ Wrong!';
    }

    // Move to next question after 1 second delay for feedback visibility
    setTimeout(() => {
      this.feedback = '';
      if (this.currentQuestionIndex < this.quizData.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizCompleted = true;
      }
      onNext();  // Notify UI to refresh
    }, 1000);
  },

  // Reset quiz state for restart
  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
    this.feedback = '';
  },
};
