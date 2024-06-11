import { createNote } from "./createNote.js"
import { notes } from "./notes.js"

export const showNotes = () => {
    document.querySelectorAll('.note').forEach(note => note.remove()) // remove as notas existentes para não duplicá-las na página
    notes.forEach((note, id) => createNote(note, id))
}

export const showNotesLength = () => {
    let notesLength = document.querySelector('#note-length')

    if(notes.length === 0){
        notesLength.textContent = 'nenhuma nota salva.'
    } else if(notes.length === 1){
        notesLength.textContent = '1 nota salva.'
    } else {
        notesLength.textContent = `${notes.length} notas salvas.`
    }
}