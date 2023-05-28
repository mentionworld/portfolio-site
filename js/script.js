/* ***** typing animation ***** */

var typed = new Typed(".typing", {
    strings: [
        "",
        "Software Engineer",
        "Web Designer",
        "Web Developer",
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ***** Aside toggle ***** */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSelection = document.querySelectorAll(".section"),
    totalSelection = allSelection.length;

for(let i=0; i< totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();

        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelection(this);
        if(window.innerWidth < 1200){
            asideSelectionTogglerBtn();
        }
    })
}

function addBackSection(e) {
    allSelection[e].classList.add("back-selection");
}
function removeBackSection() {
    for(let i = 0; i < totalSelection; i++) {
            allSelection[i].classList.remove("back-selection");
    }
}

function showSelection(e) {
    for(let i = 0; i < totalSelection; i++) {
        allSelection[i].classList.remove("active");
    }
    const target = e.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(e) {
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove('active');
        const target = e.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add('active');
        }
    }
}


document.querySelector(".hire-me").addEventListener("click",  function() {
    const sectionIndex =  this.getAttribute("data-section-index");
    showSelection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
})

function asideSelectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i < totalSelection; i++) {
        allSelection[i].classList.toggle("open");
    }
}