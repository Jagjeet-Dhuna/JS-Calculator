class Cal {
    constructor(disOutput){
        this.disOutput = disOutput
        this.clear()
    }

    clear(){
        this.disOutput = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    compute(operation){

    }

    updateDisplay(){
        this.disOutput.innerText
    }
}

const numbBtn =  document.querySelectorAll('[data-number]')
const opsBtn = document.querySelectorAll('[data-operation]')

const eqlBtn = document.querySelector('[data-equals')
const delBtn = document.querySelector('[data-del]')
const acBtn = document.querySelector('[data-ac]')

const disOutput = document.querySelector('[data-ops]')


const Cal = new Cal(disOutput)

numbBtn.forEach(button => {
    button.addEventListener('click', () => {
        Cal.appendNumber(button.innerText)
        Cal.updateDisplay()
    })
})



//  https://www.youtube.com/watch?v=j59qQ7YWLxw&t=992s&ab_channel=WebDevSimplified