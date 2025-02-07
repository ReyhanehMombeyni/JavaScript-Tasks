const arr = [12, 11, 0, 7, 54, 63, 81, 19, 5, 2];
const evenFilter = (arr) => {
  let arrFilter;
  arrFilter = arr.filter((item) => item % 2 === 1);
  console.log(arrFilter);
};
evenFilter(arr);

let container = document.querySelector(".container");
const jokeRandom = async () => {
  let content = [];
  // while(!content.length) {
  //     container.textContent= "Loading"
  // }
  container.textContent = "";
  const URL = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(URL, {
    method: "GET",
  });
  content = await response.json();
  console.log(content);
};
jokeRandom();

const array = [12, 6, 84, 32, 9, 45];
const sortFunction = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
};
sortFunction(array);

const changeColorBG = document.querySelector("#changeColorBtn");
changeColorBG.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(228, 180, 217)";
});



const timerEL = document.getElementById("timer");
const startBtn = document.getElementById("startTimerBtn");
let timeLeft = 60;
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEL.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "TimeOut";
  }
}
let timerInterval;
startBtn.addEventListener("click", () => {
  timeLeft = 60;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
});



const parent=document.createElement("div");
parent.classList.add("q8")
container.append(parent)
function createCard(title, content) {
    const card = document.createElement("div");
    card.classList.add("card");
    parent.append(card);

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    const cardContent = document.createElement("p");
    cardContent.textContent = content;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    card.append(cardTitle, cardContent, deleteBtn);


    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

}
createCard("Title1", "This is content1");
createCard("Title2", "This is content2");


function arrayToObjects(arr) {
    return arr.map(str => {
        return {
            text: str,
            length: str.length
        };
    });
}
const stringArr = ["Hello", "Hiiii", "Js"];
console.log(arrayToObjects(stringArr));


const parentEL=document.createElement("div");
parent.classList.add("q12")
container.append(parent)
const userCard = async () => {
    let users = [];
    const URL = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(URL, {
      method: "GET",
    });
    users = await response.json();

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("cardUser");
        parent.append(card);

        const userName = document.createElement("p");
        userName.textContent = user.name;

        const userEmail = document.createElement("p");
        userEmail.textContent = user.email;

        card.append(userName, userEmail);
    });
  };
userCard();

