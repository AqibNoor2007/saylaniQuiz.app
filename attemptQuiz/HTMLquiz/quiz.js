console.log(questions);
const quaiz_box = document.querySelector(".quaiz-box");
const que_text = quaiz_box.querySelector(".quaiz-text");
const option_box = quaiz_box.querySelector(".options");
const que_option = document.getElementsByClassName("option");
const next_btn = quaiz_box.querySelector(".next-btn");

const total_q = document.querySelector(".quaiz-footer .total-que");
const count_que = document.querySelector(".quaiz-footer .cunt-que");
const result_box = document.querySelector(".result-box");
const total_que_r = document.querySelector(".total-que span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const perc_r = document.querySelector(".percentage span");

// const Result_footer = document.querySelector(".result-footer");
// const exit = Result_footer.querySelector(".exit");
// const again_quaiz = document.querySelector(".result-footer .again-quaiz");

var questionIndex = 0;
var answer;
var right_ans = 0;
var wrong_ans = 0;
var totalMark = 100;
total_q.innerHTML = questions.length;

const QuizQuestion = (questionIndex) => {
  count_que.innerHTML = questionIndex + 1;
  que_text.innerHTML = questions[questionIndex].question;

  option_box.innerHTML = " ";
  questions[questionIndex].Option.forEach(
    (option) =>
      (option_box.innerHTML += `<div class="option" onclick='UserAnswer(this)'>${option}</div>`)
  );
};
QuizQuestion(questionIndex);

function UserAnswer(ans) {
  for (var i = 0; i < que_option.length; i++) {
    que_option[i].classList.remove("correct");
  }
  ans.classList.add("correct");
  answer = ans.innerHTML;
}

const NextQue = () => {
  if (questions[questionIndex].answer == answer) {
    right_ans++;
  } else {
    wrong_ans++;
  }
  if (questionIndex == questions.length - 2) {
    next_btn.innerHTML = "Finish";
    next_btn.setAttribute("onclick", "ShowResult()");
  }

  if (questionIndex !== questions.length - 1) {
    QuizQuestion(++questionIndex);
  }
};

const ShowResult = () => {
  NextQue();
  quaiz_box.classList.add("inactive");
  result_box.classList.remove("inactive");
  total_que_r.innerHTML = questions.length;
  right_ans_r.innerHTML = right_ans;
  wrong_ans_r.innerHTML = wrong_ans;
  var obtainedMark = right_ans * 10;
  perc_r.innerText = (obtainedMark / totalMark) * 100;
  +"%";
};

const BackToQuiz = () => {
  window.location.href = "/selectQuiz";
};
