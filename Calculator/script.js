const numbersBtn = document.querySelectorAll('.numbers-btn')
const operationBtn = document.querySelectorAll('.operation-btn')
const equalsBtn = document.querySelector('.equals-btn')
const deleteBtn = document.querySelector('.delete-btn')
const allClearBtn = document.querySelector('.all-clear-btn')

const previousOperandTextElement = document.querySelector('.previous-operand')
const currentOperandTextElement = document.querySelector('.current-operand')



class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    calculate() {
        let result = 0

        const _previousOperand = parseFloat(this.previousOperand)
        const _currentOperand = parseFloat(this.currentOperand)

        if(isNaN(_previousOperand) || isNaN(_currentOperand)) return

        switch (this.operation) {
            case "+":
                result = _previousOperand + _currentOperand
                break

            case "-":
                result = _previousOperand - _currentOperand
                break

            case "*":
                result = _previousOperand * _currentOperand
                break

            case "÷":
                result = _previousOperand / _currentOperand
                break

            default:
                return
        }

        this.currentOperand = result
        this.operation = undefined
        this.previousOperand = ""
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return

        if (this.previousOperand !== "") {
            console.log(this.previousOperand)
            this.calculate()
        }

        this.operation = operation

        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    appendNumber(number) {
        if (this.currentOperand.includes('.') && number === '.') return

        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    updateDisplay() {
        this.previousOperandTextElement.innerText = `${this.previousOperand}${this.operation || ""}`
        this.currentOperandTextElement.innerText = `${this.currentOperand}`
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

for (let numberBtn of numbersBtn) {
    numberBtn.addEventListener('click', () => {
        calculator.appendNumber(numberBtn.innerText)
        calculator.updateDisplay()
    })
}

for (let opBtn of operationBtn) {
    opBtn.addEventListener('click', () => {
        calculator.chooseOperation(opBtn.innerText)
        calculator.updateDisplay()
    })
}

allClearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

equalsBtn.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})