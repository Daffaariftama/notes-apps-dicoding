class NoteItem extends HTMLElement {
  constructor() {
    super();

    this._note = {
      id: "notes-jT-jjsyz61J8XKiI",
      title: "Welcome to Notes, Dimas!",
      body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      createdAt: "2022-07-28T10:03:12.594Z",
      archived: false,
    };
  }

  setNote(value) {
    this._note['id'] = value.id;
    this._note['title'] = value.title;
    this._note['body'] = value.body;
    this._note['createdAt'] = value.createdAt;
    this._note['archived'] = value.archived;

    // Render ulang setelah `blog` di-update
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {

    this.setAttribute('data-id', this._note.id);

    this.innerHTML = `
      <h4 class="note-title">${this._note.title}</h3>
      <p class="note-body">${this._note.body}</p>
      <p class="created-at">${new Date(this._note.createdAt).toLocaleString()}</p> 
    `;
  }
}

customElements.define('note-item', NoteItem);
