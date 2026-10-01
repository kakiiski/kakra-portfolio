// =========================
// TYPING EFFECT
// =========================

const text = "Cybersecurity Student & Future Cybersecurity Professional";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);
    }
}

typeEffect();


// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});