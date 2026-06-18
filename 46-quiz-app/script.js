const quizData = [
  {
    question: "Which camera movement involves moving the entire camera forward or backward on a track?",
    a: "Pan",
    b: "Tilt",
    c: "Dolly",
    d: "Pedestal",
    correct: "c",
  },
  {
    question: "What does 'depth of field' refer to in cinematography?",
    a: "The physical distance from the lens to the subject",
    b: "The distance between the nearest and furthest objects in sharp focus",
    c: "The amount of light entering the camera sensor",
    d: "The vertical framing of a specific shot",
    correct: "b",
  },
  {
    question: "Which legendary director is known for his signature 'one-point perspective' framing?",
    a: "Steven Spielberg",
    b: "Stanley Kubrick",
    c: "Martin Scorsese",
    d: "Quentin Tarantino",
    correct: "b",
  },
  {
    question: "What is the primary purpose of a 'key light' in a standard 3-point lighting setup?",
    a: "To separate the subject from the background",
    b: "To fill in the shadows created by other lights",
    c: "To create an intentional lens flare",
    d: "To act as the main source of illumination for the subject",
    correct: "d",
  },
  {
    question: "Which S.S. Rajamouli epic starring Prabhas became one of the highest-grossing Indian film franchises of all time?",
    a: "Magadheera",
    b: "RRR",
    c: "Baahubali",
    d: "Eega",
    correct: "c",
  },
  {
    question: "In the 2023 action thriller 'Salaar', Prabhas plays the character of Deva. Who directed this film?",
    a: "S.S. Rajamouli",
    b: "Prashanth Neel",
    c: "Sukumar",
    d: "Sandeep Reddy Vanga",
    correct: "b",
  },
  {
    question: "Which 1913 film directed by Dadasaheb Phalke is widely considered the first full-length Indian feature film?",
    a: "Alam Ara",
    b: "Mother India",
    c: "Kisan Kanya",
    d: "Raja Harishchandra",
    correct: "d",
  },
  {
    question: "Which Indian film song recently won the Academy Award for Best Original Song?",
    a: "Jai Ho",
    b: "Naatu Naatu",
    c: "Chaiyya Chaiyya",
    d: "Tum Hi Ho",
    correct: "b",
  },
  {
    question: "What is the term for a shot where the camera moves seamlessly through space, often giving the illusion of a single continuous take?",
    a: "Montage",
    b: "Cross-cut",
    c: "Tracking shot",
    d: "Jump cut",
    correct: "c",
  },
  {
    question: "Which editing technique cuts back and forth between two distinct scenes happening simultaneously?",
    a: "Parallel editing",
    b: "Match cut",
    c: "Smash cut",
    d: "Fade out",
    correct: "a",
  },
  {
    question: "Prabhas made his acting debut in the 2002 Telugu film titled...?",
    a: "Varsham",
    b: "Chatrapathi",
    c: "Eeswar",
    d: "Billa",
    correct: "c",
  },
  {
    question: "Who is the only Indian film personality to win an Honorary Academy Award for lifetime achievement?",
    a: "Amitabh Bachchan",
    b: "Satyajit Ray",
    c: "Yash Chopra",
    d: "A.R. Rahman",
    correct: "b",
  },
  {
    question: "What is the 'Rule of Thirds' in cinematography?",
    a: "A script structure with three acts",
    b: "Using three main lights on set",
    c: "A compositional guideline dividing the frame into a 3x3 grid",
    d: "Ensuring the shot is exactly one-third of a minute long",
    correct: "c",
  },
  {
    question: "In sound design, what is 'Foley'?",
    a: "The musical score of the film",
    b: "The reproduction of everyday sound effects added in post-production",
    c: "The dialogue recorded live on set",
    d: "The process of mixing the final audio track",
    correct: "b",
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      let title = 'Keep Shooting';
      if (score === quizData.length) title = 'Master Filmmaker';
      else if (score >= quizData.length * 0.7) title = 'Visionary Director';
      else if (score >= quizData.length * 0.4) title = 'Assistant Director';

      quiz.innerHTML = `
        <div class="result-text">
          You answered ${score}/${quizData.length} questions correctly.
          <span>${title}</span>
        </div>
        <button onclick="location.reload()">Reload Assessment</button>
      `;
    }
  }
});