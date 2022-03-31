/*Javascript ini adalah tugas pelatihan FGD - Progate
Dibuat oleh
Nama : Jibrael P.B. Leo Lede
Kelas : D
*/

/*------------Inisiasi------------*/
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

/*------------Start Section Screen------------*/
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}
/*------------End Section Screen------------*/

/*------------Start Section Numbers------------*/
const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
/*------------End Section Numbers------------*/

/*------------Start Section Operator------------*/
const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})
/*------------End Section Operator------------*/

/*------------Start Section Percentage------------*/

const percentageBtn = document.querySelector('.percentage')

const hsilPersen = () => {
    let result=''
    result = parseFloat(currentNumber)/100
    currentNumber = result
    calculationOperator = ''
}

percentageBtn.addEventListener('click', () => {
    hsilPersen()
    updateScreen(currentNumber)
    console.log(hsilPersen())
})

/*------------End Section Percentage------------*/

const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
    console.log(currentNumber)//debug
})


const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    } else {
        currentNumber += dot
    }
}
