// slideshow
let currentIndex = 0;
const slides = document.querySelectorAll('#slideshow img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i == index) {
            slide.classList.add('active');
        }
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 1500);


//result
function validateForm(event) {
    const appNum = document.getElementById("appNum").value;
    const password = document.getElementById("password").value;
    const validAppNum = "12345";
    const validPassword = "secret";

    if (appNum === validAppNum && password === validPassword) {
        alert("Redirecting to Result");
        window.open("result.pdf", "_blank");
    } else {
        alert("incorrect username or password");
    }
}

//date of birth dropdown
const select = document.getElementById('day');
for(let i = 1; i <= 31; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
select.appendChild(option);
}

/* faq
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

        if (isOpen) {
            answer.style.maxHeight = "0";
            answer.style.padding = "0 10px";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.padding = "10px";
        }
    });
})
*/
