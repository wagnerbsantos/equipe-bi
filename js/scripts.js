const database = {
    "names": [
        "Batista da Injeção",
        "Bestas Indomaveis"
    ]
}

const sayMyName = () => {
    const index = Math.floor(Math.random() * database.names.length)
    document.getElementById("nomeEquipe").innerHTML = database.names[index]
}

const rollTheDice = () => {
    sayMyName()
    const r = Math.floor(Math.random() * 2) + 1
    document.getElementById("dado").src = "images/bi" + r + ".jpg"
    document.getElementById("dado").classList.remove("dado-animation")
    document.getElementById("dado").classList.remove("dado-spin")
    window.setTimeout(() => document.getElementById("dado").classList.add("dado-spin"))
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