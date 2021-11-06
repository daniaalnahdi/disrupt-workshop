const loadTrivia = () => {
    //1. our app requests data from the api
    // 2. our app gets a response 
    //3. we do something with the data -- render 
    fetch('https://opentdb.com/api.php?amount=1&type=boolean ')
    .then((response) => response.json())
    .then((data) => renderTrivia(data))
}

const renderTrivia = (data) => {
    // reference the elements we want to change
    const triviaQuestion = document.querySelector('#trivia-question');
    const triviaAnswer = document.querySelector('#trivia-answer');

    // trivia question data
    const triviaQData = data.results[0];

    // reset the contents of q and a
    triviaQuestion.textContent = triviaQData.question;
    triviaAnswer.textContent = triviaQData.correct_answer;

}

const showAnswer = () => {
    // ref to answer
    const triviaAnswer = document.querySelector('#trivia-answer');

    triviaAnswer.classList.remove('hide');
    triviaAnswer.classList.add('show');
}

window.addEventListener('load', (event) => {
    // 1. load trivia
    loadTrivia();

    // 2. lets grab our button
    const button = document.querySelector('#answer-button');

    // 3. lets make the button functional
    button.addEventListener('click', (event) => {
        showAnswer();
    })

  });