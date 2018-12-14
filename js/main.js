const salutation = [
    'Hey',
    'Hola',
    'Hello',
    'Konnichiwa'
]


const sal = document.querySelector('.salutation')
const sal_class = new TextScramble(sal)

const content = document.querySelector('.content')
const content_class = new TextScramble(content)

const link = document.querySelector('.link')
const link_class = new TextScramble(link)

let counter = 0
const salutation_fx = () => {
    sal_class.setText(salutation[counter]).then(() => {
        setTimeout(salutation_fx, 3000)
    })
    counter = (counter + 1) % salutation.length
}

const content_fx = () => {
    content_class.setText('What Up?')
}

const link_fx = () => {
    link_class.setText('github')
}

salutation_fx()
// setTimeout(content_fx, 6000)
setTimeout(link_fx, 6000)
