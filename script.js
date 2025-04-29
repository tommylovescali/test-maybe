  <script>
    const quiz = [
    { id: 1, question: "Who created this quiz?", answers: ["tommy", "tommy hernandez", "tommylovescali"] },
  { id: 2, question: "When is his birthday?", answers: ["may 15th", "5/15", "5/15/2003", "may 15"] },
  { id: 3, question: "What console does he play on?", answers: ["playstation", "ps5"] },
  { id: 4, question: "What is his favorite game?", answers: ["overwatch", "ow", "ow2", "overwatch 2"] },
  { id: 5, question: "What was the make of his first car?", answers: ["mini cooper", "mini"] },
  { id: 6, question: "What city was he born in? ", answers: ["oakland"] },
  { id: 7, question: "What is his favorite sport?", answers: ["basketball"] },
  { id: 8, question: "What about his favorite team?", answers: ["warriors", "golden state warriors", "gsw"] },
  { id: 9, question: "What is his favorite color?", answers: ["golden yellow", "yellow"] },
  { id: 10, question: "What's his favorite flower?", answers: ["sunflower", "sun flower"] },
  { id: 11, question: "Who's his favorite band?", answers: ["hers", "her's"] },
  { id: 12, question: "Where did he go to highschool?", answers: ["vallejo highschool", "vhs", "vallejo high"] },
  { id: 13, question: "Which is the rival school to ___?", answers: ["jesse bethel high school", "jesse bethel"] },
  { id: 14, question: "What music app does he use?", answers: ["apple music", "youtube music", "apple"] },
  { id: 15, question: "What's the color of the car that he's currently driving?", answers: ["red"] },
  { id: 16, question: "What was the name of his childhood pet?", answers: ["hatchi", "hachi", "hachy", "hatchy"] },
  { id: 17, question: "What was the first game we played together?", answers: ["overwatch"] },
  { id: 18, question: "What character do I main in overwatch?", answers: ["ashe", "tracer", "soldier", "bap"] },
  { id: 19, question: "What character do you main?", answers: ["life weaver", "weaver", "mercy", "lucio", "juno"] },
  { id: 20, question: "Where is his tatoo located?", answers: ["left arm", "arm", "wrist", "left wrist"] },
  { id: 21, question: "Who's that one tiktok influencer that you watched like crazy when we first met?", answers: ["shawtybae", "shawty bae"] },
  { id: 22, question: "“Oh my ___!”", answers: ["gatos"] },
  { id: 23, question: "What IMessage game do you always tryhard on?", answers: ["word hunt", "wordhunt"] },
  { id: 24, question: "What was the first co-op game that we beat?", answers: ["it takes two"] },
  { id: 25, question: "Name one movie we went to the theatre to go watch?", answers: ["coraline", "deadpool", "alien", "deadpool and wolverine"] },
  { id: 26, question: "What is his favorite snack at the movies?", answers: ["popcorn"] },
  { id: 27, question: "What show were you watching when we first started dating?", answers: ["breaking bad"] },
  { id: 28, question: "What is your favorite soda?", answers: ["orange fanta", "fanta"] },
  { id: 29, question: "What are our go to craft stores?", answers: ["michaels", "hobby lobby"] },
  { id: 30, question: "and the other one?", answers: ["michaels", "hobby lobby"] },
  { id: 31, question: "When going to build a bear, who were we always looking for?", answers: ["pochacco"] },
  { id: 32, question: "But who's BITCHASS did we always find?", answers: ["keroppi"] },
  { id: 33, question: "What was the name of the Disney movie, where we painted a very famous scene?", answers: ["lady and the tramp", "the lady and the tramp"] },
  { id: 34, question: "Who were you for the halloween party?", answers: ["coraline"] },
  { id: 35, question: "And who was I?", answers: ["mr. bobinsky", "mr bobinsky", "bobinsky"] },
  { id: 36, question: "Who was I listening to, when I picked you up for our first date?", answers: ["hers", "her's"] },
  { id: 37, question: "On that same day, what did you gift me?", answers: ["a hers album", "a hers cd", "hers album", "a her's album", "a her's cd", "her's cd", "her's album", "cd"] },
  { id: 38, question: "On the first stop of that date, which came first. The “Rage room” or the “Paint Room”?", answers: ["rage room"] },
  { id: 39, question: "Who did we take a picture with at the mall?", answers: ["easter bunny", "the easter bunny"] },
  { id: 40, question: "After the mall, what did we eat?", answers: ["mexican food"] },
  { id: 41, question: "What aquarium did we go to for our 2nd official date?", answers: ["monterey bay aquarium", "montereybay aquarium", "monterey bay"] },
  { id: 42, question: "And on the way there, who were we listening to?", answers: ["hers"] },
  { id: 43, question: "And what song of theirs did we sing together?", answers: ["what once was"] },
  { id: 44, question: "What did we eat after going to the aquarium?", answers: ["fish and chips"] },
  { id: 45, question: "Where did we go to watch the sunset?", answers: ["the beach", "beach"] },
  { id: 46, question: "What city did I say it would be a dream to get a house at?", answers: ["monterey", "monterey bay"] },
  { id: 47, question: "What city did we go on our first road trip?", answers: ["la", "los angeles"] },
  { id: 48, question: "What theme park did we go to during our time in LA?", answers: ["disneyland", "disney"] },
  { id: 49, question: "How many days did we go to disney? ", answers: ["4 days", "4", "4 day"] },
  { id: 50, question: "What snack did I love at disneyland?", answers: ["churro", "churros"] },
  { id: 51, question: "What avenger did we take a picture with?", answers: ["captain america"] },
  { id: 52, question: "What is your favorite disney ride?", answers: ["pirates of the caribbean", "pirates"] },
  { id: 53, question: "While waiting in line for the matterhorn, what did I drop?", answers: ["turkey leg", "chicken leg", "a turkey leg"] },
  { id: 54, question: "What drink did we sneak into disney?", answers: ["vodka", "alcohol"] },
  { id: 55, question: "And what flavor was the icecream were we using as the chaser?", answers: ["lemonaid", "lemonade", "lemon aid"] },
  { id: 56, question: "What was the theme of the Mickey Mouse ears that I got?", answers: ["spider-man", "spider man", "spiderman"] },
  { id: 57, question: "What concert was I not old enough to attend with you?", answers: ["kiltro"] },
  { id: 58, question: "What concert was the first we both attended together?", answers: ["ginger root", "pearl and the oysters", "gingerroot"] },
  { id: 59, question: "Who else was performing at the concert as well?", answers: ["ginger root", "pearl and the oysters", "gingerroot"] },
  { id: 60, question: "What was the gift you got me at that concert?", answers: ["a shirt", "shirt", "t shirt", "a t shirt", "merch", "ginger root merch", "gingerroot merch"] },
  { id: 61, question: "And what color was it?", answers: ["pink"] },
  { id: 62, question: "And who was performing at the last concert we attended together?", answers: ["crumb"] },
  { id: 63, question: "Who's the one artist I always say I wish we could've both watched live?", answers: ["hers", "her's"] },
    ];

    let currentQuestionIndex = 0;
    let questionEl = document.getElementById("question");
    let answerBox = document.getElementById("answerBox");
    let resultEl = document.getElementById("result");
    let progressBar = document.getElementById("progressBar");
    let faceEl = document.getElementById("face");

    const talkingFaces = ["^ ▽ ^", "^ - ^"];

    function typeText(element, text, callback) {
      let i = 0;
      element.textContent = "";
      let faceIndex = 0;

      function typeChar() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          faceEl.textContent = talkingFaces[faceIndex];
          faceIndex = (faceIndex + 1) % talkingFaces.length;
          i++;
          setTimeout(typeChar, 60);
        } else {
          faceEl.textContent = "^ - ^";
          if (callback) callback();
        }
      }

      typeChar();
    }

    function loadQuestion() {
      const currentQ = quiz[currentQuestionIndex];
      answerBox.value = "";
      resultEl.textContent = "";
      updateProgressBar();
      typeText(questionEl, currentQ.question);
      answerBox.focus();
    }

    function checkAnswer() {
      const userAnswer = answerBox.value.trim().toLowerCase();
      const correctAnswers = quiz[currentQuestionIndex].answers;

      if (correctAnswers.includes(userAnswer)) {
        resultEl.textContent = "ACCESS GRANTED";
        resultEl.style.color = "#00ff00";
        setTimeout(() => {
          nextQuestion();
        }, 500);
      } else {
        resultEl.textContent = "ACCESS DENIED";
        resultEl.style.color = "#ff3333";
      }
    }

    function nextQuestion() {
  currentQuestionIndex++;

 
  if (currentQuestionIndex === 11) {
    showBreak("Good Job!", "yeah yeah whatever...");
    return;
  }
  if (currentQuestionIndex === 16) {
    showBreak("Yo!", "Heyy!");
    return;
  }
  if (currentQuestionIndex === 24) {
    showBreak("This might be pretty random since we dont know each other lol, But i just wanted to say that you're very beautiful.", "You are so sweet, Thank you!🤭you had me at *sanest overwatch enjoyer* thats my main go to!");
    return;
  }
  if (currentQuestionIndex === 35) {
    showBreak("Still so embarrassed on how this date started 😅", "continue");
    return;
  }
  if (currentQuestionIndex === 40) {
    showBreak("What do you think?", "The fish are nice...");
    return;
  }
  if (currentQuestionIndex === 46) {
    showBreak("Now to the............ Happiest place on earth!", "cant wait to go back with you");
    return;
  }
  if (currentQuestionIndex === 56) {
    showBreak("When im with you baby, I'm at home", "Together, all alone");
    return;
  }

  if (currentQuestionIndex < quiz.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "MISSION COMPLETE";
    answerBox.style.display = "none";
    document.querySelector("button[onclick='checkAnswer()']").style.display = "none";
    resultEl.innerHTML = `<a href="https://youtu.be/xz1BpG77QAY" target="_blank">click me.</a>`;
    updateProgressBar(true);
  }
}

    function updateProgressBar(force100 = false) {
      const progress = force100
        ? 100
        : (currentQuestionIndex / quiz.length) * 100;
      progressBar.style.width = progress + "%";
    }

    function showBreak(message, buttonText = "Continue") {
  document.getElementById("breakMessage").style.display = "block";
  const messageEl = document.getElementById("customMessage");
  messageEl.textContent = "";

  const continueBtn = document.querySelector("#breakMessage button");
  continueBtn.textContent = ""; 

  
  typeText(messageEl, message, () => {
    typeButtonText(continueBtn, buttonText);
  });

  document.getElementById("question").style.display = "none";
  answerBox.style.display = "none";
  document.querySelector("button[onclick='checkAnswer()']").style.display = "none";
}
function typeButtonText(button, text) {
  let i = 0;
  button.textContent = "";

  function typeChar() {
    if (i < text.length) {
      button.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 50);
    }
  }

  typeChar();
}
    function resumeQuiz() {
      document.getElementById("breakMessage").style.display = "none";
      document.getElementById("question").style.display = "block";
      answerBox.style.display = "block";
      document.querySelector("button[onclick='checkAnswer()']").style.display = "block";
      loadQuestion();
    }

    answerBox.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkAnswer();
      }
    });

    window.onload = function() {


     showBreak("Welcome to whatever you call this! Finish this and you get a prize at the end!", "umm.... okay?");
    };
    
    
      </script>    
