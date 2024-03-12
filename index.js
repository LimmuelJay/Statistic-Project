const btn = document.querySelector(".btn")
const dice = document.querySelector(".dice")
const selectElement = document.getElementById("dice-select")
const radio = document.getElementById("radio-div")


const randomNumberGeneratorForDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    return randomNumber
}

const randomNumberGeneratorForCards = () => {
    const randomNumber = Math.ceil(Math.random() * 51);
    return randomNumber
}

let type = 'dices'
radio.addEventListener("click", (e) => {
    const value = e.srcElement.defaultValue

    if (value === "dices") {
        document.querySelector(".title").innerHTML = "Roll Dice!"
        document.querySelector(".label").innerHTML = "How many dice to roll?"
        document.querySelector(".btn").innerHTML = "ROLL"

        console.log("CHECK_dices")
        type = 'dices'
        document.querySelector("#img0").setAttribute("src", `./images/dice/dice6.png`)
        document.querySelector("#img1").setAttribute("src", `./images/dice/dice6.png`)
        document.querySelector("#img2").setAttribute("src", `./images/dice/dice6.png`)
        document.querySelector("#img3").setAttribute("src", `./images/dice/dice6.png`)
        document.querySelector("#img4").setAttribute("src", `./images/dice/dice6.png`)

    }
    if (value === "cards") {
        document.querySelector(".title").innerHTML = "Draw Cards!"
        document.querySelector(".label").innerHTML = "How many cards to draw?"
        document.querySelector(".btn").innerHTML = "DRAW"


        console.log("CHECK_cards")
        type = 'cards'
        document.querySelector("#img0").setAttribute("src", `./images/cards/back-card.jpg`)
        document.querySelector("#img1").setAttribute("src", `./images/cards/back-card.jpg`)
        document.querySelector("#img2").setAttribute("src", `./images/cards/back-card.jpg`)
        document.querySelector("#img3").setAttribute("src", `./images/cards/back-card.jpg`)
        document.querySelector("#img4").setAttribute("src", `./images/cards/back-card.jpg`)


    }

})


selectElement.addEventListener("change", (e) => {
    const value = e.target.value
    let children = dice.children.length

    if (value !== children) {
        dice.replaceChildren()
        counter = 0
        while (counter < value) {
            const img = document.createElement("img");
            img.setAttribute("id", `img${counter}`);
            if (type === 'dices') {
                img.setAttribute("src", `./images/dice/dice6.png`);
            } else {
                img.setAttribute("src", `./images/cards/back-card.jpg`);
            }
            
            dice.appendChild(img)
            counter ++
        }
    }
})

btn.addEventListener("click", () => {
    if (type === 'cards') {
        document.querySelector("#img0").setAttribute("src", `./images/cards/${randomNumberGeneratorForCards()}-cards.png`)
        document.querySelector("#img1").setAttribute("src", `./images/cards/${randomNumberGeneratorForCards()}-cards.png`)
        document.querySelector("#img2").setAttribute("src", `./images/cards/${randomNumberGeneratorForCards()}-cards.png`)
        document.querySelector("#img3").setAttribute("src", `./images/cards/${randomNumberGeneratorForCards()}-cards.png`)
        document.querySelector("#img4").setAttribute("src", `./images/cards/${randomNumberGeneratorForCards()}-cards.png`)

    } else {
        document.querySelector("#img0").setAttribute("src", `./images/dice/dice${randomNumberGeneratorForDice()}.png`)
        document.querySelector("#img1").setAttribute("src", `./images/dice/dice${randomNumberGeneratorForDice()}.png`)
        document.querySelector("#img2").setAttribute("src", `./images/dice/dice${randomNumberGeneratorForDice()}.png`)
        document.querySelector("#img3").setAttribute("src", `./images/dice/dice${randomNumberGeneratorForDice()}.png`)
        document.querySelector("#img4").setAttribute("src", `./images/dice/dice${randomNumberGeneratorForDice()}.png`)

    }
})