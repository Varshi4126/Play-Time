const UIpaper = document.querySelector(".circle-paper");
const UIrock = document.querySelector('.circle-rock');
const UIscissors = document.querySelector('.circle-scissors');
const UIspock = document.querySelector('.circle-spock');
const UIlizard = document.querySelector('.circle-lizard');
const userChoiceBlock = document.querySelector('.user_choices');
const playAreaUI = document.querySelector('.playArea');
const playAreaResultUI = document.querySelector('.playAreaResult');
const resultUI = document.getElementById('result');
const computerChoiceList = ['PAPER', 'ROCK', 'SCISSORS', 'SPOCK', 'LIZARD'];
const scoreUI = document.querySelector('#score');
const playAgainButtonUI = document.querySelector('#playAgainButton');
const rulesUI = document.querySelector('.rules');
const rulesPopUpUI = document.querySelector('.rulesPopup')
const choices = {
  ROCK: {
    name: "ROCK",
    defeats: ["SCISSORS", "LIZARD"]
  },
  PAPER: {
    name: "PAPER",
    defeats: ["ROCK", "SPOCK"]
  },
  SCISSORS: {
    name: "SCISSORS",
    defeats: ["PAPER", "LIZARD"]
  },
  LIZARD: {
    name: "LIZARD",
    defeats: ["PAPER", "SPOCK"]
  },
  SPOCK: {
    name: "SPOCK",
    defeats: ["SCISSORS", "ROCK"]
  }

};

let computerChoice,userChoice;

let score = 0;



const getUserChoice = (e) => {
  if (e.target.classList.contains('circle-paper')) {
    let userchoice = 'PAPER';
    renderUserChoice(userchoice);
  } else if (e.target.classList.contains('circle-rock')) {
    renderUserChoice('ROCK');
  } else if (e.target.classList.contains('circle-scissors')) {
    renderUserChoice(('SCISSORS'));
  } else if (e.target.classList.contains('circle-spock')) {
    renderUserChoice('SPOCK');
  } else if (e.target.classList.contains('circle-lizard')) {
    renderUserChoice('LIZARD');
  } else {
    alert("Bring the arrow closer to the choice circle");
  }
}


const renderUserChoice = (userchoice = 'PAPER') => {

  if (userchoice) {
    userChoiceBlock.style.display = "none";
    playAreaUI.style.display = 'flex';
    userChoice =userchoice; 
  }

  let imgsrc, svgclass, circleclass;

  switch (userchoice) {
    case 'PAPER':

      imgsrc = './images/icon-paper.svg';
      svgclass = 'svg-paper';
      circleclass = 'circle-paper';
      break;
    case 'ROCK':

      imgsrc = './images/icon-rock.svg';
      svgclass = 'svg-rock';
      circleclass = 'circle-rock';
      break;
    case 'SCISSORS':

      imgsrc = './images/icon-scissors.svg';
      svgclass = 'svg-scissors';
      circleclass = 'circle-scissors';
      break;

    case 'SPOCK':

      imgsrc = './images/icon-spock.svg';
      svgclass = 'svg-spock';
      circleclass = 'circle-spock';
      break;

    case 'LIZARD':

      imgsrc = './images/icon-lizard.svg';
      svgclass = 'svg-lizard';
      circleclass = 'circle-lizard';
      break;


    default:
      break;
  }

  const userPlayAreaUI = document.querySelector('.userPlayArea');

  userPlayAreaUI.getElementsByTagName('img')[0].src = `${imgsrc}`;
  userPlayAreaUI.getElementsByTagName('svg')[0].class = `${svgclass}`;
  userPlayAreaUI.getElementsByTagName('circle')[0].class = `${circleclass}`;
  getComputerChoice();
}


const getComputerChoice = () => {
  let randomIndex = Math.floor((Math.random()) * (Math.floor(5)));
  computerChoice = computerChoiceList[randomIndex];
  renderComputerChoice(computerChoice);
}


const renderComputerChoice = (compChoice) => {



  let imgsrc, svgclass, circleclass;

  switch (compChoice) {
    case 'PAPER':

      imgsrc = './images/icon-paper.svg';
      svgclass = 'svg-paper';
      circleclass = 'circle-paper';
      break;
    case 'ROCK':

      imgsrc = './images/icon-rock.svg';
      svgclass = 'svg-rock';
      circleclass = 'circle-rock';
      break;
    case 'SCISSORS':

      imgsrc = './images/icon-scissors.svg';
      svgclass = 'svg-scissors';
      circleclass = 'circle-scissors';
      break;

    case 'SPOCK':

      imgsrc = './images/icon-spock.svg';
      svgclass = 'svg-spock';
      circleclass = 'circle-spock';
      break;

    case 'LIZARD':

      imgsrc = './images/icon-lizard.svg';
      svgclass = 'svg-lizard';
      circleclass = 'circle-lizard';
      break;


    default:
      break;
  }

  const ComputerPlayAreaUI = document.querySelector('.computerPlayArea');

  ComputerPlayAreaUI.getElementsByTagName('img')[0].src = `${imgsrc}`;
  ComputerPlayAreaUI.getElementsByTagName('svg')[0].class = `${svgclass}`;
  ComputerPlayAreaUI.getElementsByTagName('circle')[0].class = `${circleclass}`;

 setTimeout(resultCalc.bind(null,userChoice,computerChoice),0); 
}


const resultCalc = (userChoice,computerChoice)=>{


  if(choices[computerChoice].defeats.includes(userChoice)){
    playAreaResultUI.style.visibility="visible";
    resultUI.innerText="You lost";
    score--;
  }
  else if(userChoice==computerChoice){
    playAreaResultUI.style.visibility="visible";
    resultUI.innerText="Match Drawn";
  }
  else{
    playAreaResultUI.style.visibility="visible";
    resultUI.innerText="You won"
    score++;
  }
  
  scoreUI.innerText = `${score}`;  
  
}

playAgainButtonUI.addEventListener('click',()=>{
  
  playAreaUI.style.display="none";
  userChoiceBlock.style.display="flex";
  playAreaResultUI.style.visibility="hidden";

});



const rulesPopUpWindow = () => {
      rulesPopUpUI.style.display="flex";
     const modalUI = rulesPopUpUI.querySelector('.modal');
   
        rulesPopUpUI.addEventListener('click',(e)=>{
          
           if(e.target!=modalUI)
              rulesPopUpUI.style.display="none";

      });
      
}

UIpaper.addEventListener('click',getUserChoice);
UIrock.addEventListener('click', getUserChoice);
UIscissors.addEventListener('click',getUserChoice);
UIspock.addEventListener('click',getUserChoice);
UIlizard.addEventListener('click',getUserChoice);
rulesUI.addEventListener('click',rulesPopUpWindow);




