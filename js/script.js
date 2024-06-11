import { createInfoNote, addNewNote, closePopup } from "./operations.js"
import { showNotes, showNotesLength } from "./showNotes.js"

const addNewNoteBtn = document.querySelector('.add-new-note')
const closePopupBtn = document.querySelector('#closeBtn')
const addNoteBtn = document.querySelector('#add-btn')

addNewNoteBtn.addEventListener('click', addNewNote)
closePopupBtn.addEventListener('click', closePopup)

addNoteBtn.addEventListener('click', () => { // adicionar e atualizar uma nota
    createInfoNote()
    showNotes()
    showNotesLength()
})

showNotes()
showNotesLength()