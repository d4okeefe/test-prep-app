const questions = {
  question1: {
    q: `If ( x - 1 ) / 3  = k and k = 3, what is the value of x ?`,
    a1: "2",
    a2: "4",
    a3: "9",
    a4: "10",
  },
  question2: {
    q: `For i = sqrt ( -1 ), what is the sum ( 7 + 3i ) + ( -8 + 9i ) ?`,
    a1: "-1 + 12i",
    a2: "-1 - 6i",
    a3: "15 + 12i",
    a4: "15 - 6i",
  },
  question3: {
    q: `On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent p text messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?`,
    a1: "9mp",
    a2: "20mp",
    a3: "5m + 4p",
    a4: "4m + 5p",
  },
};

var Q1 = document.getElementById("Q1");
var Q2 = document.getElementById("Q2");
var Q3 = document.getElementById("Q3");

if (Q1 !== null) {
  Q1.innerText = questions.question1.q;
  document.getElementById("Q1A1").innerText = questions.question1.a1;
  document.getElementById("Q1A2").innerText = questions.question1.a2;
  document.getElementById("Q1A3").innerText = questions.question1.a3;
  document.getElementById("Q1A4").innerText = questions.question1.a4;
}

if (Q2 !== null) {
  Q2.innerText = questions.question2.q;
  document.getElementById("Q2A1").innerText = questions.question2.a1;
  document.getElementById("Q2A2").innerText = questions.question2.a2;
  document.getElementById("Q2A3").innerText = questions.question2.a3;
  document.getElementById("Q2A4").innerText = questions.question2.a4;
}

if (Q3 !== null) {
  Q3.innerText = questions.question3.q;
  document.getElementById("Q3A1").innerText = questions.question3.a1;
  document.getElementById("Q3A2").innerText = questions.question3.a2;
  document.getElementById("Q3A3").innerText = questions.question3.a3;
  document.getElementById("Q3A4").innerText = questions.question3.a4;
}
