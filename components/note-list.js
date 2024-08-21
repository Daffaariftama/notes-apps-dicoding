class NoteList extends HTMLElement {
  constructor() {
    super();

    this._NoteList = [];

  }

  setNoteList(value) {
    this._NoteList = value;

    // Render ulang setelah `NoteList` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {

    const noteItemElements = this._NoteList.map((item) => {
      const note = document.createElement('note-item');
      note.setNote(item);

      return note;
    });

    this.innerHTML = '';
    this.append(...noteItemElements);
  }
}

customElements.define('note-list', NoteList);
