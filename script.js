const quizData = [
    {
        question: "1. Which type of JavaScript language is?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
    },
    {
        question: "2. What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Central Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "a",
    },
    {
        question: "3. In HTML elements,CSS can be added in different",
        a: "2 ways",
        b: "1 way",
        c: "3 ways",
        d: "4 ways",
        correct: "c",
    },
    {
        question: "4. Does JavaScript allow exception handling?",
        a: "No",
        b: "Yes, but it provides only try block",
        c: "Yes, but it provides only Try catch block, but does not allow throw exception",
        d: "Yes, it provides try, catch as well as throw key word for exception handling",
        correct: "d",
    },

    {
        question: "5. How do we write a comment in javascript?",
        a: "/* */",
        b: "//",
        c: "*",
        d: "$$",
        correct: "b",
    },
    {
        question: "6. Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "7. How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a",
    },
    {
        question: "8. When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c",
    },
    {
        question: "9. Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "10. Which of the following is not a Javascript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "cassandra",
        correct: "d",
    }

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Restart</button>
            `
        }
    }
})