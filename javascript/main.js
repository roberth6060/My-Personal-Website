/* =================================== Auto age update =================================== */
function AutoAge(birthYear, birthMonth, birthDay) {
    var birthdate = new Date(birthYear, birthMonth - 1, birthDay);
    var today = new Date();
    return Math.floor((today.getTime() - birthdate.getTime()) /
        1000 / 60 / 60 / 24 / 365);
}

function showBirthday() {
    var i, elem, items = document.getElementsByClassName("birthday");
    for (i = 0; i < items.length; i++) {
        elem = items[i];
        elem.innerHTML = AutoAge(elem.dataset.year || 1994, elem.dataset.month || 0, elem.dataset.day || 1) + " Years old";
    }
}


/* =================================== Change status =================================== */
const freelanceStatus = document.getElementById("freelance-status").innerText;

if (freelanceStatus == "Available") {
    document.getElementById("freelance-status").style.color = "green";
    document.getElementById("freelance-status").style.fontWeight = "600";
} else {
    document.getElementById("freelance-status").style.color = "red";
    document.getElementById("freelance-status").style.fontWeight = "600";
}

/* =================================== Hover =================================== */
// document.getElementsByClassName("hover").mouseleave(
//     function () {
//         $(this).removeClass("hover");
//     }
// );

/* =================================== Typing animation =================================== */

function mainText() {
    var typed = new Typed('#typing1', {
        strings: ["", "Web Designer", "Web Developer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        startDelay: 0,
        loop: true,
    });

    var typed = new Typed('#typing2', {
        strings: ["", "USMC Veteran", "College Graduate"],
        typeSpeed: 100,
        backSpeed: 60,
        startDelay: 0,
        loop: true,
    });
}
/* =================================== Side Section =================================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
for (let i = -0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // For lope that removes the "active" class
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        //add "active" class to clicked anchor tag:
        this.classList.add("active");
        showSection(this);
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    side = document.querySelector(".side");
navTogglerBtn.addEventListener("click", () => {
    sideSectionTogglerBtn();
});

function sideSectionTogglerBtn() {
    side.classList.toggle("open");
    
    navTogglerBtn.classList.toggle("open");
    // for(let i=0; i<totalSection; i++) {
    //     allSection[i].classList.toggle("open")
    // }
}