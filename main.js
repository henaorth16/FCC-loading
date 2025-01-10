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
   main.innerHTML = "" // First,  clear if there is any garbage inn it
   if(numberOfRect > 0 && delay >= 0 && speed >= 0){  //check the input is valid
      //create divs or rectangles
     for (let i = 0; i < numberOfRect; i++) {
       const divElem = document.createElement("div");
       divElem.style.animationDuration = `${speed}ms`;

       main.appendChild(divElem);
     }
     /* ########### For loop (old way) ########## */
     // let center = Math.ceil(numberOfRect / 2);
     // let target = center * 2;

     // for (let i = 1; i < center; i++) {
     //    const rects = document.querySelectorAll("#main > *")

     //    let left = i
     //    let right = target - (i+2)
     //    console.log(rects);

     //    rects[left].style.animationDelay = `${i*delay}ms`
     //    rects[right].style.animationDelay = `${i * delay}ms`
     // }

     /* ####### while loop (new way) ###### */
     const rects = document.querySelectorAll("#main > div");
     let left = 0;
     let right = rects.length - 1;
     while (left <= right) {
       console.log(left, right);
       rects[left].style.animationDelay = `${left * delay}ms`;
       rects[right].style.animationDelay = `${left * delay}ms`;
       left++;
       right--;
     }

   }else{
      main.innerHTML = `
      <h2>Invalid input</h2>
      `
   }
}
