const container1 = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const coloContainerE1 = document.createElement("div");//creating the div elements in the code

    coloContainerE1.classList.add("color-container");//for giving class names
    container1.appendChild(coloContainerE1);//for create a new elements for the parent class
}

const colorContainerE1s = document.querySelectorAll(".color-container");

function generateColors(){
    colorContainerE1s.forEach((coloContainerE1)=>{
        const newColorCode = randomColor();
        coloContainerE1.style.backgroundColor = newColorCode
        coloContainerE1.innerText = newColorCode
    })
}

function randomColor(){
    const char  = "123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for (let i=0; i < colorCodeLength; i++){
        const randomNum = Math.floor(Math.random()*char.length);//this will be randomnum with the length of char is 14
        colorCode += char.substring(randomNum,randomNum+ 1); //String.substring(startingIndex,endingIndex) randomNum is staringIndex and endingIndex is randomNum+1 this is to create colorCode as a string.
    }
    colorCode = '#' + colorCode
    return colorCode
}

generateColors()