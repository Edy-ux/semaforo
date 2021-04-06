// DOM
const image = document.querySelector('#image')
const buttons = document.querySelectorAll('.buttons')
    //Variable
let colorsIndex = 0
let intervalId = null

//Function
const TurnOn = {
    'red': () => image.src = './assets/red.png',
    'yellow': () => image.src = './assets/yellow.png',
    'green': () => image.src = './assets/green.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000), //armazenandoo o id de  setInterVal numa variavél. 
    'stop': () => {
        image.src = "./assets/turn-of.png"
        clearInterval(intervalId)
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    TurnOn[colors[colorsIndex]]()
    colorsIndex++
    if (colorsIndex === 3) colorsIndex = 0
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        TurnOn.stop()
        switch (event.target.id) {
            case 'red':
                TurnOn.red()
                break;
            case 'yellow':
                TurnOn.yellow()
                break;
            case 'green':
                TurnOn.green()
                break;
            case 'auto':
                TurnOn.automatic()
                break;
            default:
                break;
        }
    })
})