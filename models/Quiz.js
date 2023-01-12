import {Question} from './Question.js'

export class Quiz {

    questionIndex= 0
    score= 0
    
    /* Recibe un array de questions */

    constructor(questions) {
        this.questions = questions
    }

       /* Retorna la cuestion encontrada */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }
    
    isEnded() {
        return this.questions.length === this.questionIndex
    }

    /*recibe string answer*/
    guess(answer) {
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++

        }
        this.questionIndex++
    }
}
