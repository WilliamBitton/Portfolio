let lang = "fr"
const translations = {
    en: {
        skills: "Skills",
        cvNav: "CV",
        projects: "Projects",
        language: "Fr",
        welcome: "WELCOME.",
        desc: "Junior web developer in career transition after more than 10 years of experience in sales and technology. Passionate about writing code and solving problems, I completed a Web Developer course at Cégep Garneau in Quebec, and I am now motivated and ready to take on new challenges !",
        programming: "Programming",
        tools: "Tools",
        design: "Design",
        descSkills: "My skills are constantly evolving, and I'm always excited to add a new 'card' to this section !",
        descProjects: "I'm proud to have collaborated with these awesome companies wich allowed me to learn and enhance my skills as part of their teams:",
        game: "My first javascript project",
        descGame: "A simple memory game with up to 10 pairs of cards.",
        descGame2: "Try it !",
        descGame3: "Memory game - Html, Css, Javascript",
        muvac: "Muvac project",
        descMuvacProject: "This is a preview of the early stage in the development of the Muvac app, still under development and not yet available on the App Store.",
        descMuvacProject2: "Please note that the images displayed here are not the officials images.",
        cv: "Curriculum Vitae",
        descCv: "Say hi !",
        descCv2: "Contact me at willbitton54@gmail.com ",
        descCv3: "Or call me at +1 (581) 700-2211",
        footer: "Created with Bootstrap © 2024 William Bitton",
        pdfSrc: "./assets/CV William Bitton EN.pdf",
        cvSrc: "./assets/CV William Bitton EN.svg",
        download: "Download",
        descMuvac: "Mobile application - React Native",
        descNadame: "Website - React and Node Js",
        descProductionsJSL: "Website - Wordpress and Divi",
        visitWebsite: "Visit website"
    },
    fr: {
        skills: "Compétences",
        cvNav: "CV",
        projects: "Projets",
        language: "En",
        welcome: "BIENVENUE.",
        desc: "Développeur web junior en reconversion professionnelle après plus de 10 ans d'expérience dans la vente et les technologies. Passionné par la programmation, j'ai suivi une formation de Développeur Web au cégep Garneau à Québec, et je suis aujourd'hui motivé et prêt à relever de nouveaux défis !",
        programming: "Programmation",
        tools: "Outils",
        design: "Design",
        descSkills: "Mes compétences sont en constante évolution, et j'ai toujours hâte de pouvoir ajouter une nouvelle 'carte' dans cette section !",
        descProjects: "Je suis heureux d'avoir pu collaborer avec ces entreprises qui m'ont permis d'évoluer au sein de leurs équipes:",
        game: "Mon premier projet javascript",
        descGame: "Un simple jeu de mémoire allant jusqu'à 10 paires de cartes.",
        descGame2: "Essayez-le !",
        descGame3: "Jeu de mémoire - Html, Css, Javascript",
        muvac: "Muvac project",
        descMuvacProject: "Ceci est un aperçu des premières étapes de développement de l'application Muvac, toujours en cours de développement et pas encore disponible sur l'App Store.",
        descMuvacProject2: "Veuillez noter que les images affichées ici ne sont pas les images officielles.",
        cv: "Curriculum Vitae",
        descCv: "Contactez-moi !",
        descCv2: "À l'adresse willbitton54@gmail.com",
        descCv3: "Ou au +1 (581) 700-2211",
        footer: "Crée avec Bootstrap © 2024 William Bitton",
        pdfSrc: "./assets/CV William Bitton.pdf",
        cvSrc: "./assets/CV William Bitton.svg",
        download: "Télécharger",
        descMuvac: "Application mobile - React Native",
        descNadame: "Site - React et Node Js",
        descProductionsJSL: "Site - Wordpress et Divi",
        visitWebsite: "Visiter le site"
    }
}
// changeLanguage(lang)
function toggleLanguage() {
    if (lang === "fr") {
        changeLanguage('en');
    } else {
        changeLanguage('fr');
    }
}
function changeLanguage(language) {
    lang = language
    const pdfSource = translations[lang].pdfSrc
    const cvSource = translations[lang].cvSrc
    changePdfSource(pdfSource, cvSource)
    let elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function (element) {
        let key = element.getAttribute('data-translate');
        let keyParts = key.split('.');
        if (translations[language] && keyParts.length > 1 && translations[language][keyParts[0]][keyParts[1]][keyParts[2]]) {
            element.textContent = translations[language][keyParts[0]][keyParts[1]][keyParts[2]];
        } else if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}
function getUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.startsWith('fr' || "fr") ? 'fr' : 'en'
}
function changePdfSource(pdfSource, cvSource) {
    document.getElementById("PdfDownload").href = pdfSource
    document.getElementById("CvViewer").src = cvSource
}
function displayNoneMainPage() {
    document.getElementById("MainPage").classList.toggle("d-none")
}
function hideLeftMainPage() {
    document.getElementById("MainPage").classList.toggle("hide-left")
}
function handleSlider(e) {
    e.preventDefault()
    const name = e.currentTarget.getAttribute("name")
    document.getElementById("Logo").classList.toggle("d-none")
    document.getElementById("Logo-white").classList.toggle("d-none")
    document.getElementById("Slider").classList.toggle("hide-left")
    if (name !== "CloseSlider") {
        SliderContent.innerHTML = ""
        const element = document.getElementById(name)
        const clonedElement = element.cloneNode(true)
        SliderContent.appendChild(clonedElement)
        document.getElementById(name + "Link").classList.toggle("z-index")
        document.querySelectorAll(".handle-slider").forEach(element => {
            if (element !== e.currentTarget && element.name !== "CloseSlider") {
            element.removeEventListener("click", handleSlider);
            }
        })
    } else {
        document.getElementById("SkillsLink").classList.remove("z-index")
        document.getElementById("ProjectsLink").classList.remove("z-index")
        document.getElementById("CvLink").classList.remove("z-index")
        document.querySelectorAll(".handle-slider").forEach(element => { element.addEventListener("click", handleSlider) })
    }
    if (document.getElementById("MainPage").classList.contains("hide-left")) {
        document.getElementById("MainPage").classList.toggle("d-none")
        setTimeout(hideLeftMainPage, 0)
        document.querySelectorAll(".handle-slider").forEach(element => { element.addEventListener("click", handleSlider) })
    } else {
        document.getElementById("MainPage").classList.toggle("hide-left")
        setTimeout(displayNoneMainPage, 250)
    }
}
window.onload = function () {
    const userLang = getUserLanguage()
    changeLanguage(userLang)
    const pdfSource = translations[userLang].pdfSrc
    const cvSource = translations[userLang].cvSrc
    changePdfSource(pdfSource, cvSource)
}
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollToTopBtn").style.display = "block"
    } else {
    document.getElementById("scrollToTopBtn").style.display = "none"
    }
}
document.querySelectorAll(".handle-slider").forEach(element => { element.addEventListener("click", handleSlider) })
document.getElementById("scrollToTopBtn").addEventListener("click", function() {window.scrollTo({ top: 0, behavior: 'smooth' })})