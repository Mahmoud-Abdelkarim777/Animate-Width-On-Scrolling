let section = document.querySelector(".three");
let progressSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 200) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        progressSpans.forEach((span) => {
            span.style.width = "0%";
        });
    }
};
