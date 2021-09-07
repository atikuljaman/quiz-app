// Add function to button to get in login page
const loadForm = () => {
    location.href = 'login-form.html';
};

// Log in form section functionality start heres

const submitForm = () => {
    const errorEmail = document.querySelector('.error-email');
    const errorPassword = document.querySelector('.error-password')
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;

    // clear input field
    inputField.value = '';
    passwordField.value = '';
     
    // condition for enter website
    if (inputFieldText === 'amiquizkheltechai@gmail.com' && passwordFieldValue === 'quizkhelbo') {
        location.href = 'quiz.html';
    }
    else {
        // condition for error handling 
        if (inputFieldText !== 'amiquizkheltechai@gmail.com') {
            errorEmail.classList.remove('d-none');
            errorPassword.classList.add('d-none')
        }
        else if (passwordFieldValue !== 'quizkhelbo') {
            errorPassword.classList.remove('d-none');
            errorEmail.classList.add('d-none');
        };
    };
};


// quiz functionality section start heres

const questionObj = [
    {
        que: 'If you want to ask a question to the users and expect to get a boolean value as return, which one you can use?',
        a: 'confirm()',
        b: 'alert()',
        c: 'isConfirm()',
        d: 'yes()',
        ans: 'ans1'
    },
    {
        que: 'Why is prompt() used?',
        a: 'to take input from users',
        b: 'to loop through an object',
        c: 'To show an output',
        d: 'All the above',
        ans: ''
    },
    {
        que: 'Full form og BOM in JavaScript is ----',
        a: 'Beautiful Object Model',
        b: 'Browser Objective Model',
        c: 'Beast Object Modules',
        d: 'Browser Object Model',
        ans: ''
    },
    {
        que: 'Which dev tool tab of the browser will show you the cookies stored?',
        a: 'Sources',
        b: 'Network',
        c: 'Performance',
        d: 'Application',
        ans: ''
    },
    {
        que: 'If you want to visit "https://www.google.com/" from your site on a button click, which one should you use?',
        a: 'location.assign;',
        b: 'location.move;',
        c: 'location.change;',
        d: 'location.reload;',
        ans: ''
    },
    {
        que: 'Which storage information will not remain after you close the browser?',
        a: 'cookies',
        b: 'local storage',
        c: 'session storage',
        d: 'None of the above',
        ans: ''
    },
    {
        que: `How will you use the following button to navigate backward exactly one entry in the session history while clicked? document.getElementById('go-back').addEventListener('click', () => {
        
            history.___?___;
          
          });`,
        a: 'go(1)',
        b: 'back()',
        c: 'backward(-1)',
        d: 'forward()',
        ans: ''
    },
    {
        que: 'Which method will you use to store items in local storage?',
        a: 'localStorage.storeItem()',
        b: 'localStorage.getItem()',
        c: 'localStorage.setItem()',
        d: 'localStorage.saveItem()',
        ans: ''
    },
    {
        que: 'Which one is true?',
        a: 'cookies are not sent to the server',
        b: 'cookies are sent to the server',
        c: 'Only Facebook is using cookies',
        d: 'Browser cookies are edible',
        ans: ''
    },
    {
        que: 'Which one will return you all the cookies in a string?',
        a: 'window.cookie',
        b: 'window.cookieStorage',
        c: 'document.cookie',
        d: 'document.cookies',
        ans: ''
    }
];

const question = document.getElementById('questions');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const answers = document.querySelectorAll('.answer');
const showScore = document.getElementById('score');
const allData = document.getElementById('all-data');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const quizValues = questionObj[questionCount];

    question.innerText = quizValues.que;
    option1.innerText = quizValues.a;
    option2.innerText = quizValues.b;
    option3.innerText = quizValues.c;
    option4.innerText = quizValues.d;
}

loadQuestion();


const getAns = () => {
    let answer;
    answers.forEach(currAns => {
        if (currAns.checked) {
            answer = currAns.id;
        }
    })
    return answer;
}

const deSelect = () => {
    answers.forEach(currAns => currAns.checked = false)
}

const submitQuiz = () => {
    const checkAns = getAns();
    console.log(checkAns);
    
    if (checkAns === questionObj[questionCount].ans) {
        score++;
    };
    questionCount++;
    deSelect();
    if (questionCount < questionObj.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <div class="pe-5">
        <img class="img-fluid ps-5 w-100" src="images/pic1.svg" alt="">
        <br>
    </div>

    <h4 class="text-center my-3">you scored ${score}/${questionCount} &#9996;</h4>
    <button onclick="location.reload()" class="btn">Play again</button>
        `

        allData.innerHTML = '';
    }
};