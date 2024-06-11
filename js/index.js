let lang = "fr"
const translations = {
    en: {
        skills: "Skills",
        wireframes: "Wireframes",
        projects: "Projects",
        language: "Voir le site en Français",
        welcome: "WELCOME.",
        desc: "Junior web developer in Quebec",
        programming: "Programming",
        tools: "Tools",
        design: "Design",
        wireframes1: "Wireframes",
        wireframes2: "These wireframes were created using the Figma tool. Some of them are mock-ups, while others are projects for businesses.",
        wireframes3: "I also had the opportunity to collaborate on the design and development of the Productions JSL company's wireframe and website using WordPress.",
        projects1: "Projects",
        projects2: "Here are three projects that have been an opportunity for me to acquire new skills, whether in front-end or back-end.",
        projects3: "More projects were realised since then, including a mobile application with React Native for Muvac company.",
        footer: "Created with Bootstrap © 2023 William Bitton",
        goButton: "Go",

        modal: {
            project1: {
                title: "Memory game",
                content: "Enter your name and the number of card desired and enjoy a moment of relaxation in this memory game created with html, css and javascript.",
                subline: "HTML & Javascript & CSS"
            },
            project2: {
                title: "Snippet",
                content: "Snippet website created with Node js and express with an EJS template.",
                subline: "Node Js & Express & EJS"
            },
            project3: {
                title: "Admin interface",
                content: "Admin interface for Nadame Design d'intérieur company created with React, Node js and MongoDB.",
                subline: "React & Next & Material UI"
            },
            wireframe1: {
                title: "Webflix movies and tv series",
                content: "This mock-up wireframe is an obvious copy of the namesake website, differing by just one letter!",
                subline: "Figma"
            },
            wireframe2: {
                title: "Cheering Stuff",
                content: "Actual wireframe of an order management admin interface created for Cheering Stuff company.",
                subline: "Figma"
            },
            wireframe3: {
                title: "School newspaper",
                content: "This mock-up wireframe was designed for a student newspaper, enabling monetization through Amazon products and providing product reviews.",
                subline: "Figma"
            }
        }
    },
    fr: {
        skills: "Compétences",
        wireframes: "Maquettes",
        projects: "Projets",
        language: "View website in English",
        welcome: "BIENVENUE.",
        desc: "Développeur web junior à Québec",
        programming: "Programmation",
        tools: "Outils",
        design: "Design",
        wireframes1: "Maquettes",
        wireframes2: "Ces maquettes ont été réalisées avec l'outil Figma, certaines de ces maquettes sont fictives, d'autres sont des projets pour des entreprises.",
        wireframes3: "J'ai également eu l'opportunité de collaborer à l'élaboration de la maquette et du site web de la compagnie Productions JSL avec Wordpress.",
        projects1: "Projets",
        projects2: "Voici trois projets réalisés durant l'apprentissage des langages du web, ils m'ont permis d'apprendre les bases du front-end et back-end.",
        projects3: "Plusieurs autres projets ont été réalisés depuis, dont un projet d'application mobile avec React Native pour la compagnie Muvac.",
        footer: "Crée avec Bootstrap © 2023 William Bitton",
        goButton: "Voir",

        modal: {
            project1: {
                title: "Jeu de mémoire",
                content: "Entrez votre nom et le nombre de paires de cartes désiré, et profitez d'un instant de détente dans ce jeu de mémoire crée avec html, css et javascript.",
                subline: "HTML & Javascript & CSS"
            },
            project2: {
                title: "Snippet",
                content: "Création d'un site de snippet/post-it avec Node js et express avec un template EJS.",
                subline: "Node Js & Express & EJS"
            },
            project3: {
                title: "Interface d'administration",
                content: "Création d'une interface d'adminitration pour la compagnie Nadamé Design d'intérieur avec React, Node js et MongoDB.",
                subline: "React & Next & Material UI"
            },
            wireframe1: {
                title: "Webflix films et séries",
                content: "Cette maquette fictive est une copie évidente du site éponyme, à une lettre près !",
                subline: "Figma"
            },
            wireframe2: {
                title: "Cheering Stuff",
                content: "Maquette réelle d'interface d'administration de commandes réalisée pour la compagnie Cheering Stuff.",
                subline: "Figma"
            },
            wireframe3: {
                title: "Journal étudiant",
                content: "Cette maquette fictive a été élaborée pour un journal étudiant, permettant la monétisation via des produits Amazon, et offrant des revues de produits.",
                subline: "Figma"
            }
        }
    }
}
// let elements = document.querySelectorAll('[data-translate]');
// elements.forEach(function (element) {
//     let key = element.getAttribute('data-translate');
//     let keyParts = key.split('.');
//     if (translations[lang] && keyParts.length > 1 && translations[lang][keyParts[0]][keyParts[1]][keyParts[2]]) {
//         element.textContent = translations[lang][keyParts[0]][keyParts[1]][keyParts[2]];
//     } else if (translations[lang] && translations[lang][key]) {
//         element.textContent = translations[lang][key];
//     }
// });
function enterWebsite(language) {
    changeLanguage(language);
    document.getElementById("Home").classList.toggle("d-none")
    document.getElementById("FirstPage").classList.toggle("menu-hidden")
    setTimeout(displayHome, 0)
    setTimeout(hidFirstPage, 500)
}
function toggleLanguage() {
    if (lang === "fr") {
        changeLanguage('en');
    } else {
        changeLanguage('fr');
    }
}
function changeLanguage(language) {
    lang = language
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
function hidHome() {
    document.getElementById("Home").classList.toggle("d-none")
}
function hidFirstPage() {
    document.getElementById("FirstPage").classList.toggle("d-none")
}
function displayHome() {
    document.getElementById("Home").classList.toggle("menu-hidden")
}
function handleMenu(e) {
    e.preventDefault()
    const name = e.currentTarget.getAttribute("name")
    document.getElementById("Logo").classList.toggle("d-none")
    document.getElementById("Logo-white").classList.toggle("d-none")
    document.getElementById("MenuHidden").classList.toggle("menu-hidden")
    if (name !== "CloseMenuHidden") {
        MenuHiddenContent.innerHTML = ""
        const element = document.getElementById(name)
        const clonedElement = element.cloneNode(true)
        MenuHiddenContent.appendChild(clonedElement)
        document.querySelectorAll(".handle-modal").forEach(element => { element.addEventListener("click", handleModal) })
        document.getElementById(name + "Link").classList.toggle("z-index")
    } else {
        document.getElementById("SkillsLink").classList.remove("z-index")
        document.getElementById("ProjectsLink").classList.remove("z-index")
        document.getElementById("WireframesLink").classList.remove("z-index")
    }
    if (document.getElementById("Home").classList.contains("menu-hidden")) {
        document.getElementById("Home").classList.toggle("d-none")
        setTimeout(displayHome, 0)
    } else {
        document.getElementById("Home").classList.toggle("menu-hidden")
        setTimeout(hidHome, 250)
    }
}
function handleModal(e) {
    document.getElementById("ModalLabel").textContent = translations[lang].modal[e.currentTarget.dataset.title].title
    document.getElementById("ModalContent").textContent = translations[lang].modal[e.currentTarget.dataset.title].content
    document.getElementById("ModalImage").src = e.currentTarget.dataset.image
    document.getElementById("ModalLink").href = e.currentTarget.dataset.link
}
document.querySelectorAll(".handle-menu").forEach(element => { element.addEventListener("click", handleMenu) })
document.querySelectorAll(".handle-modal").forEach(element => { element.addEventListener("click", handleModal) })