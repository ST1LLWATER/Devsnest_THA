var url = "https://opentdb.com/api.php?amount=10";

// fetch(url).then((response) => response.json()).then((data)=> console.log(data))

const questions = [
  {
    question: "Who is the owner of Bitcoin ?",
    options: ["Satoshi Nakamoto", "Elon musk", "Jeff Bezos", "Kim Jong-un"]
  },
  {
    question: "when was bitcoin created ?",
    options: ["2009", "2011", "2010", "2008"]
  }
];

const body = document.body;
var score = 0;

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function reveal(elem) {
  let temp = score;
  let options = elem.closest(".options");
  let buttons = options.querySelectorAll("button");
  buttons.forEach((button) => {
    button.click();
  });
  score = temp;
}

function createOption(option, answer = false) {
  const optionHolder = document.createElement("div");
  optionHolder.className = "option";
  const button = document.createElement("button");
  button.innerText = option;
  button.addEventListener("click", () => {
    if (answer) {
      if (!button.classList.contains("correct")) {
        score++;
      }
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
    reveal(button);
  });

  optionHolder.append(button);
  return optionHolder;
}




fetch(url)
  .then((response) => response.json())
  .then((data) => {
    var results = data.results;
    // console.log(results)
    results.forEach((quest) => {
      let options = [quest.correct_answer, ...quest.incorrect_answers];
      quest.options = options;
      // console.log(quest);
    });



    shuffle(questions);
results.forEach((currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
  const container = document.createElement("div");
  container.className = "container";
  const question = document.createElement("div");
  question.className = "question";
  question.innerHTML = `${questionNumber + 1}. ${currentQuestion.question}`;
  container.append(question);

  const options = document.createElement("div");
  options.className = "options";
  let optionsArr = [];
  currentQuestion.options.forEach((option, number) => {
    if (number == 0) {
      optionsArr.push(createOption(option, true));
    } else {
      optionsArr.push(createOption(option));
    }
  });
  shuffle(optionsArr);
  optionsArr.forEach((option) => {
    options.append(option);
  });
  container.append(options);
  body.append(container);

  const result = document.querySelector(".result");
result.addEventListener("click", () => {
  result.innerHTML = `${score}/${results.length}`;
});
});



  });
// shuffle(questions);
// questions.forEach((currentQuestion, questionNumber) => {
//   // the code we want to run for each question goes here
//   const container = document.createElement("div");
//   container.className = "container";
//   const question = document.createElement("div");
//   question.className = "question";
//   question.innerHTML = `${questionNumber + 1}. ${currentQuestion.question}`;
//   container.append(question);

//   const options = document.createElement("div");
//   options.className = "options";
//   let optionsArr = [];
//   currentQuestion.options.forEach((option, number) => {
//     if (number == 0) {
//       optionsArr.push(createOption(option, true));
//     } else {
//       optionsArr.push(createOption(option));
//     }
//   });
//   shuffle(optionsArr);
//   optionsArr.forEach((option) => {
//     options.append(option);
//   });
//   container.append(options);
//   body.append(container);
// });

// const result = document.querySelector(".result");
// result.addEventListener("click", () => {
//   result.innerHTML = `${score}/${questions.length}`;
// });

{
  /* <div class="container">
      <div class="question">Who is the owner bitcoin ?</div>
      <div class="options">
        <div class="option">
          <button class="option1 correct">option1</button>
        </div>
        <div class="option"><button class="option2 wrong">option2</button></div>
        <div class="option"><button class="option3">option3</button></div>
        <div class="option"><button class="option4">option4</button></div>
      </div>
    </div> */
}
