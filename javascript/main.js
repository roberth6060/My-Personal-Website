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

/* =================================== Typing animation =================================== */

function mainText() {
    var typed = new Typed('#typing1', {
        strings: ["", "web designer", "web developer", "software developer", "avid gamer"],
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


const navTogglerBtn = document.querySelector(".nav-toggler"),
    allSection = document.querySelectorAll(".section"),
    mainSection = document.querySelectorAll(".main"),
    totalSection = allSection.length;
side = document.querySelector(".side");
navTogglerBtn.addEventListener("click", () => {
    sideSectionTogglerBtn();
});

function sideSectionTogglerBtn() {
    side.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* ===================== Nav-links onScroll to active ===================== */


var sections = document.querySelectorAll("section");

onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function (id) {
    // console.log(id);
    var selector = `nav a[href="#${id}"]`;
    console.log(selector);
    document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});
/* ===================== Mailto JS ===================== */
 var now = new Date();
 var time = d.getHours()

 function sendMail() {

     const greetingTypes = ["Good morning", "Good afternoon", "Good evening"];
     var name = document.getElementById("cname").value;
     var email = document.getElementById("cemail").value;
     var subject = document.getElementById("csubject").value;
     var body = document.getElementById("cmessage").value;


     if (time < 12) {
         greetingText = greetingTypes[0];
     } else if (time < 18) {
         greetingText = greetingTypes[1];
     } else {
         greetingText = greetingTypes[2];
     }

     var ebody = greetingText + " Robert Haye," + "%0D%0A" + body + "%0D%0A" + "%0D%0A" + "My information:" + "%0D%0A" + "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + "%0D%0A";

     if (subject === "") {
         window.location.replace(`mailto:haye.robert@yahoo.com?body=${ebody}&subject=${name} wants to contact you`);
     } else {
         window.location.replace(`mailto:haye.robert@yahoo.com?body=${ebody}&subject=${subject}`);
     }
 }