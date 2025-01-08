const main = document.querySelector("#main")
const numOfRectInput = document.querySelector("#numOfRect")
const delayInput = document.querySelector("#delay")
const speedInput = document.querySelector("#speed")
const btnElem = document.querySelector("#btn")

document.addEventListener("keydown", (e) => {
   if(e.key == "Enter" && numOfRectInput !== "" && delayInput !== "") {
      apply()
   }
})

function apply() {
   start(numOfRectInput.value, delayInput.value, speedInput.value)
}

function start(numberOfRect, delay, speed) {
   main.innerHTML = ""
   if(numberOfRect > 0 && delay >= 0 && speed >= 0){
      let center = Math.ceil(numberOfRect / 2);
      let target = center * 2
      
      for (let i = 0; i < numberOfRect; i++) {
         const divElem = document.createElement("div")
         divElem.style.animationDuration = `${speed}ms`
         console.log(speed)
         main.appendChild(divElem)
      }
      for (let i = 1; i < center; i++) {
         const rects = document.querySelectorAll("#main > *")

         let left = i
         let right = target - (i+2)
         console.log(rects);

         rects[left].style.animationDelay = `${i*delay}ms`
         rects[right].style.animationDelay = `${i * delay}ms`
      }
   }else{
      main.innerHTML = `
      <h2>Invalid input</h2>
      `
   }
}
