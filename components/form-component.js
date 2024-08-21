class formComponent extends HTMLElement{
  constructor(){
    super();

    this.render();
    
  }

  render(){
    this.innerHTML = `
      <form action="#" id="form" class="form" autocomplete="off">
          <h1>Tambah Notes👇🏻</h1>
          <div class="form-group">
            <label for="title">Masukkan Title Notes</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                aria-describedby="titleValidation"
                minlength="6"
                maxlength="30"
                required />
            <p id="titleValidation" class="validation-message" aria-live="polite"></p>
          </div>
          <div class="form-group">
            <label for="bodyNotes">Masukkan isi Notes</label>
            <textarea name="bodyNotes" id="bodyNotes" aria-describedby="bodyValidation" minlength="6" required></textarea>
            <p id="bodyValidation" class="validation-message" aria-live="polite"></p>
          </div>
          <button type="submit" class="submit">Tambah</button>
        </form>
    `
  }
}

customElements.define('form-component', formComponent);