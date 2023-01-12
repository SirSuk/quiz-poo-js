export class Question {
  /**
   *
   * @param {string} text is a question
   * @param {string[]} choices choices to choose
   * @param {string} answer correct answer
   */
  constructor (text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  correctAnswer (choice) {
    return choice === this.answer
  }
}

new Question()
