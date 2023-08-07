const mainContianer = document.querySelector(".zion")

const secondContainer = document.querySelector(".second-zion")

const submitButton = document.getElementById("submit")

const rateButton = document.getElementById("rate-again")

const rating = document.getElementById("rating")

const rates = document.querySelectorAll(".btn-zion")

submitButton.addEventListener("click", () => {
    secondContainer.classList.remove("hidden")
    mainContianer.style.display='none'
})

rateButton.addEventListener("click", () => {
    secondContainer.classList.add("hidden")
    mainContianer.style.display='block'
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})