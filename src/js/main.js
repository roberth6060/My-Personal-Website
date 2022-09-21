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
  var typed = new Typed("#typing1", {
    strings: ["", "web designer", "web developer", "graphic designer"],
    typeSpeed: 100,
    backSpeed: 60,
    startDelay: 0,
    loop: true,
  });

  var typed = new Typed("#typing2", {
    strings: ["", "USMC Veteran", "College Graduate"],
    typeSpeed: 100,
    backSpeed: 60,
    startDelay: 0,
    loop: true,
  });
}

/* =================================== Side Section =================================== */

function hideSidebar() {
  document.getElementById("openSideMenu").checked = false;
}

var sideIconToggle = document.getElementById("sidebarContainer");

document.addEventListener("click", function (event) {
  if (!sidebarContainer.contains(event.target)) hideSidebar();
});
/* ===================== Nav-links onScroll to active ===================== */

let sections = document.querySelectorAll("section");

onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      let currentId = section.attributes.id.value;
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
  var selector = `nav a[href="#${id}"]`;
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
let now = new Date();
let time = now.getHours();

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

  var ebody =
    greetingText +
    " Robert Haye," +
    "%0D%0A" +
    body +
    "%0D%0A" +
    "%0D%0A" +
    "My information:" +
    "%0D%0A" +
    "Name: " +
    name +
    "%0D%0A" +
    "Email: " +
    email +
    "%0D%0A" +
    "%0D%0A";

  if (subject === "") {
    window.location.replace(
      `mailto:haye.robert@yahoo.com?body=${ebody}&subject=${name} wants to contact you`
    );
  } else {
    window.location.replace(
      `mailto:haye.robert@yahoo.com?body=${ebody}&subject=${subject}`
    );
  }
}
