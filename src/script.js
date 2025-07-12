
let startbtn=document.getElementById("startbutton")
let options=document.getElementById("options")
let nextBtn=document.getElementById("nextBtn")
let questionDisp=document.getElementById("Question")
let currentIndex=0;
let score=0;
let optionList=document.getElementById("optionslist")



let questions=[{
  question:"Which are the following is not a christopherNolan Movie",
  choice:["Interstellar","Inception","Dune","Oppenhemier"],
  answer:"Dune"

},
{
  question:"Which is the top Grossing MCU Movie",
  choice:["InfinityWar","EndGame","ThorRagnork","CivilWar"],
  answer:"Endgame"
}


]

startbtn.addEventListener("click",()=>{
  startbtn.classList.add("hidden")
  renderQuestion()
})

function renderQuestion(){
  questionDisp.innerHTML=""
  optionList.innerHTML=""

  let currentQuestionObj= questions[currentIndex]
  
  let questionname=document.createElement("h3")

  questionname.textContent=currentQuestionObj.question
  questionname.classList.add("questionstyle")
  questionDisp.appendChild(questionname);
  currentQuestionObj.choice.forEach(element => {
  let optionelemnent=document.createElement("li")
  
    optionelemnent.textContent=element;

    optionelemnent.classList.add("liststyle","optionId")

    optionList.appendChild(optionelemnent)
   
  });


document.querySelectorAll(".optionId").forEach(element => {

element.addEventListener("click",(event)=>{
  nextBtn.classList.remove("hidden")

  let selectedOption=event.target.textContent

  let actualAnswer=questions[currentIndex].answer

  if(selectedOption===actualAnswer){
    score++
  }
  console.log(score);
  
})
  
});

}





nextBtn.addEventListener("click",nextQuestion)



function nextQuestion(){

  nextBtn.classList.add("hidden")

  if(currentIndex<questions.length){
      currentIndex++;
      renderQuestion()



  }


  


}



