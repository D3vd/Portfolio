const salutation = [
    'Hey',
    'Hola',
    'Hello',
    'Konnichiwa'
]

const html_content = "My name is Dev. I'm an aspiring software developer currently enrolled in college. I enjoy writing code especially in Python and Javascript. I spend most of my time making stuff no one asked for and contributing to open source."

const stalk_content = "Stalk me on <a class='text' target='_blank' href='https://gitstalk.netlify.com/r3l3ntl3ss' >gitstalk</a> to see what I am upto."


const sal = document.querySelector('.salutation')
const sal_class = new TextScramble(sal)

const content = document.querySelector('.content')
const content_class = new TextScramble(content)

const stalk = document.querySelector('.stalk')
const stalk_class = new TextScramble(stalk)

const link = document.querySelector('.link')
const link_class = new TextScramble(link)


let counter = 0
const salutation_fx = () => {
    sal_class.setText(salutation[counter]).then(() => {
        setTimeout(salutation_fx, 8000)
    })
    counter = (counter + 1) % salutation.length
}

const content_fx = () => {
    content_class.setText(html_content)
}

const stalk_fx = () => {
    stalk_class.setText(stalk_content)
}

const link_fx = () => {
    link_class.setText('github')
}


// salutation_fx()
// content_fx()

setTimeout(salutation_fx, 1000)
setTimeout(content_fx, 3000)
setTimeout(stalk_fx, 10000)
setTimeout(link_fx, 8000)
