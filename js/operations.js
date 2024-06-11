import { randomColor } from "./colors.js"
import { showNotes, showNotesLength } from "./showNotes.js"
import { notes } from "./notes.js"
import { sanitize } from "./sanitize.js"

const popupBox = document.querySelector('.popup-box')
const inputNote = document.querySelector('#input-note')
const addNoteBtn = document.querySelector('#add-btn')

let isUpdate = false
let updateId

export const addNewNote = () => {
    popupBox.classList.add('show')
    inputNote.focus()

    inputNote.value = ""
    document.querySelector('.popup-content h1').textContent = "Adicionar uma nova nota"
    addNoteBtn.textContent = "Adicionar nota"
}

export const closePopup = () => {
    popupBox.classList.remove('show')
}

export const createInfoNote = () => { // cria ou atualiza uma nota
    let textInput = sanitize(inputNote.value) // substitui o \n para <br> para preservar a quebra de linha
    const color = randomColor() 
    
    if(textInput){
        let noteInfo = {
            noteText: textInput,
            background: color
        }

        if(!isUpdate){
            notes.push(noteInfo)
        } else {
            notes[updateId].noteText = noteInfo.noteText
            isUpdate = false
        }

        localStorage.setItem("notes", JSON.stringify(notes)) // adiciona uma nova nota ou uma nota atualizada
        popupBox.classList.remove('show') // fecha popup
    }
}
    
export const editNote = (note, index) => { 
    isUpdate = true
    updateId = index

    popupBox.classList.add('show') // abre popup

    document.querySelector('.popup-content h1').textContent = "Editar nota"
    addNoteBtn.textContent = "Atualizar nota"
    
    inputNote.focus()
    inputNote.value = note.noteText 
}

export const deleteNote = (index) => {
    notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    showNotes()
    showNotesLength()
}

export const showOptions = (id) => {
    const options = document.querySelectorAll('.options')[id]
    options.classList.toggle('show')
}

