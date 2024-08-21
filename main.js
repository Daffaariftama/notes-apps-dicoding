import { validationHandler } from './form-custom-validation.js'
import { notesData } from './notes.js'
import './components/form-component.js'
import './components/note-item.js'
import './components/note-list.js'

const form = document.querySelector('form');
const titleInput = form.elements.title;
const bodyInput = form.elements.bodyNotes;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newNote = {
    id: `notes-${Date.now()}`, 
    title: titleInput.value,
    body: bodyInput.value,
    createdAt: new Date().toISOString(),
    archived: false,
  };

  notesData.push(newNote);
  const noteListEl = document.querySelector('note-list');
  noteListEl.innerHTML = '';
  noteListEl.setNoteList(notesData)
  window.alert(' Berhasil Menambah Note');
  form.reset();
  
});

titleInput.addEventListener('change', validationHandler);
titleInput.addEventListener('invalid', validationHandler);
bodyNotes.addEventListener('change', validationHandler);
bodyNotes.addEventListener('invalid', validationHandler);

titleInput.addEventListener('blur', (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = '';
  }
});

bodyInput.addEventListener('blur', (event) => {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;
  console.log(errorMessage);

  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = '';
  }
});