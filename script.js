//your JS code here. If required.
let currentElement = document.querySelector(".circle:first-child")
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let position = 1;

function next(){
	if(position<5){

       if (prevButton.disabled) prevButton.disabled = false;
		
		const nextLine = currentElement.nextElementSibling;
		nextLine.classList.add("active");
		const nextCircle = currentElement.nextElementSibling;
		nextCircle.classList.add("active");

		currentElement = nextCircle;
		position++;

		if(position === 5){
			nextButton.disabled = true;
		}
	}
}

function prev() {
	if(position!==1){

      if (nextButton.disabled) nextButton.disabled = false;
		
		currentElement.classList.remove("active");
		 const prevLine = currentElement.previousElementSibling;
		prevLine.classList.remove("active");
        currentElement = prevLine.previousElementSibling;
        position--;
		if (position === 1) {
            prevButton.disabled = true;
        }
	}
}