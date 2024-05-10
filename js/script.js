const addNewNoteBtn = document.querySelector('.add-new-note')
const popupBox = document.querySelector('.popup-box')
const closePopupBtn = document.querySelector('#closeBtn')
const inputNote = document.querySelector('#input-note')
const addNoteBtn = document.querySelector('#add-btn')
const noteList = document.querySelector('ul')
const alertMsg = document.querySelector('.alert-message')

let notes = JSON.parse(localStorage.getItem("notes") || "[]") // save notes in localstorage
let isUpdate = false, updateId

addNewNoteBtn.addEventListener('click', () => { // show "new note" popup
    popupBox.classList.add('show')
    inputNote.focus()

    inputNote.value = ""
    document.querySelector('.popup-content h1').textContent = "Add a new note"
    addNoteBtn.textContent = "Add note"
})

closePopupBtn.addEventListener('click', () => { // close popup
    popupBox.classList.remove('show')
    alertMsg.style.display = 'none'
    alertMsg.style.opacity = '0'
})

addNoteBtn.addEventListener('click', () => { // add new note & save updated note button
    let textInput = inputNote.value
    textInput = textInput.replace(/\n/g, '<br>') // replace all \n from input and replce to <br>

    const randomColor = randomColorBackground() // getting a random color for note background

    if(!textInput){
        alertMsg.style.display = 'block'
        setTimeout(() => {
            alertMsg.style.opacity = '1'; 
        }, 1);

    } else {
        let noteInfo = {
            noteText: textInput,
            background: randomColor
        }

        if(!isUpdate){
            notes.push(noteInfo)
        } else {
            notes[updateId].noteText = noteInfo.noteText // saving an updated note withoud modify background
            isUpdate = false
        }

        closePopupBtn.click()
        alertMsg.style.display = 'none'
        alertMsg.style.opacity = '0'
    }

    localStorage.setItem("notes", JSON.stringify(notes))

    inputNote.value = ""
    showNotes()
})


const randomColorBackground = () => {
    const colors = [
        "CAF4FF", "A0DEFF", "5AB2FF", "68D2E8", "7EA1FF", "FF8080", "FEA1A1",
        "FF9F9F", "FF87B2", "FF5D5D", "A5DD9B", "C5EBAA", "DCFFB7", "99BC85",
        "D9EDBF", "AAD9BB", "A1EEBD", "FFBB70", "FFEC9E", "FFCF96", "FFBE98", 
        "FFBB64", "B5C0D0", "E5E1DA", "D2E9E9", "E5D4FF", "D0A2F7", "BEADFA",
        "DFCCFB", "AEE2FF", "ACBCFF", "C780FA", "03AED2", "FDFFC2", "94FFD8",
        "cdb4db", "ffc8dd", "ffafcc", "bde0fe", "a2d2ff", "48cae4", "90e0ef",
        "caf0f8", "d6ccc2", "d5bdaf", "ccc5b9", "84a59d", "cbf3f0", "d9ed92"
    ]
    
    const color = Math.floor(Math.random() * colors.length)
    return colors[color]
}

const showNotes = () => {
    document.querySelectorAll('.note').forEach(note => note.remove())
    let noteBox = ""
    
    notes.forEach((note, id) => {
        noteBox += `<div class="note" style="background-color: #${note.background};">
                    <div class="content">
                        <p>${note.noteText}</p>
                    </div>
                    <div class="options">
                        <li onclick="editNote('${note.noteText}', ${id})"><ion-icon name="pencil-outline"></ion-icon>Edit</li>
                        <li onclick="deleteNote(${id})"><ion-icon name="trash-outline"></ion-icon>Delete</li>
                    </div>
                </div>`
    })

    addNewNoteBtn.insertAdjacentHTML("afterend", noteBox)
}

const editNote = (note, index) => {
    isUpdate = true
    updateId = index

    addNewNoteBtn.click()

    document.querySelector('.popup-content h1').textContent = "Edit note"
    addNoteBtn.textContent = "Update note"

    note = note.replace(/<br>/g, '\n')
    inputNote.value = note
}

const deleteNote = (index) => {
    notes.splice(index, 1)

    localStorage.setItem("notes", JSON.stringify(notes))
    showNotes()
}

showNotes()