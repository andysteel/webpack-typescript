import { formData } from "./forms";
console.log("Hello world !!!")
console.log("Hello world !!!")

const form = document.querySelector('form')!

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = formData(form)
    console.log(data)
})

//to show error in console
//const person: any = {}
//console.log(person.nome)