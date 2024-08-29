const submitBtn = document.getElementById("submit-btn");
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thankyou-component");
const ratingBtns = document.querySelectorAll(".btn")

let ratingScore = document.querySelector(".dynamic-number");

let defaultScore = 0;





//EVENT

submitBtn.addEventListener("click", submitScore)

ratingBtns.forEach((btn) => {
btn.addEventListener("click", ratingBtnClicked)
})





//FUNCTION

function submitScore (e) {

    e.preventDefault();

    ratingComponent.style.display = "none";
    thankYouComponent.style.display = "block";

    ratingScore.textContent = defaultScore;
}

function ratingBtnClicked (e) {
    if(e.target.classList.contains("star-number")) {
        e.target.classList.toggle("active");
    }
defaultScore = e.target.textContent;
}












