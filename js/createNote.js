import { editNote, deleteNote, showOptions } from "./operations.js"
import { sanitize } from "./sanitize.js"

export const createNote = (noteInput, id) => {
    const notesWrapper = document.querySelector('.wrapper')

    // criando as notas
    const noteSection = document.createElement('section')
    noteSection.className = 'note flex-column'
    noteSection.style.backgroundColor = `#${noteInput.background}`

    // criando a div de opções
    const popupOptions = document.createElement('div')
    popupOptions.className = 'popup-options'

    // adicionando o ícone para abrir as opções
    const iconOptions = document.createElement('ion-icon')
    iconOptions.name = 'ellipsis-vertical'
    iconOptions.id = 'popup-icon-options'
    iconOptions.addEventListener('click', () => showOptions(id))

    // criando a div de opções de editar e deletar
    const divOptions = document.createElement('div')
    divOptions.className = 'options'

    // adicionando os botões
    // editar
    const editBtn = document.createElement('button')
    editBtn.addEventListener('click', () => editNote(noteInput, id))
    const editBtnIcon = document.createElement('i')
    editBtnIcon.className = 'fa-solid fa-pencil'
    const editBtnText = document.createElement('p')
    editBtnText.textContent = 'Editar'

    // deletar
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', () => deleteNote(id))
    const deleteBtnIcon = document.createElement('i')
    deleteBtnIcon.className = 'fa-solid fa-trash'
    const deleteBtnText = document.createElement('p')
    deleteBtnText.textContent = 'Deletar'
    
    // adicionando o ícone e o texto dos botões
    editBtn.append(editBtnIcon, editBtnText)
    deleteBtn.append(deleteBtnIcon, deleteBtnText)

    // adicicionando os botões na div
    divOptions.append(editBtn, deleteBtn)

    // juntando o ícone e a div de opções
    popupOptions.append(iconOptions, divOptions)

    // criando a div do conteúdo da nota
    const divContent = document.createElement('div')
    divContent.className = 'content'
    const divContentText = document.createElement('p')
    divContentText.textContent = sanitize(noteInput.noteText)

    divContent.append(divContentText)

    noteSection.append(popupOptions, divContent)

    notesWrapper.append(noteSection)
}

// estrutura das notas em html

/* <section class="note flex-column">
          <div class="popup-options">
            <ion-icon name="ellipsis-vertical" id="popup-icon-options"></ion-icon>
            <div class="options">
              <button>
                <i class="fa-solid fa-pencil"></i>
                <p>Editar</p>
              </button>
              <button>
                <i class="fa-solid fa-trash"></i>
                <p>Deletar</p>
              </button>
            </div>
          </div>
          <div class="content">
            <p>noteText</p>
          </div>
    </section> */