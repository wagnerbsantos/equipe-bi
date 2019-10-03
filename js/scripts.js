const database = {
    "names": [
        "Batista na Injeção",
        "Bestas Indomaveis",
        "Bastardos Inglórios",
        "Burigo Intolerante",
        "Business Intelligence",
        "Bêbados Incapazes",
        "Beans Indestrutíveis",
        "Batista Incomodado",
        "Burigo Insensível",
        "Bestas Inconsoláveis",
        "Babacas Idiotas",
        "Blonde Inlove
    ]
}

const sayMyName = () => {
    const index = Math.floor(Math.random() * database.names.length)
    document.getElementById("nomeEquipe").innerHTML = database.names[index]
}

const rollTheDice = () => {
    sayMyName()
    const r = Math.floor(Math.random() * 2) + 1
    document.getElementById("bi").src = "images/bi" + r + ".jpg"
    document.getElementById("bi").classList.remove("bi-animation")
    document.getElementById("bi").classList.remove("bi-spin")
    window.setTimeout(() => document.getElementById("bi").classList.add("bi-spin"))
}

sayMyName()

let gameStarted = false;

// window.addEventListener('keyup', function (e) {
//     if (e.keyCode === 71 && !gameStarted) {
//         gameStarted = true;
//         startGame()
//     }
// })

// document.getElementById("nomeEquipe").addEventListener('touchstart', function (e) {
//     startGame(375)
// })
