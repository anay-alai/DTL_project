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
});