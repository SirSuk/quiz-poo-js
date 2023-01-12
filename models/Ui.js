export class UI {
    constructor() {}
    /*question a renderizar*/
    showQuestion(text){
        console.log(text)
        const questionTitle = document.querySelector('#question')
        questionTitle.innerText=text
    }
    /* recibe array de strings */
    showChoices(choices) {
        const choicesContainer = document.getElementById('choices')
        for(let i=0; i<choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i]
            choicesContainer.append(button)
        }
    }
}