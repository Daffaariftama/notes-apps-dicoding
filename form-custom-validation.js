export const validationHandler = (event) => {
  event.target.setCustomValidity('');

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Wajib diisi.');
    console.log(`wajib`);
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity('Minimal panjang adalah enam karakter.');
    return;
  }
};
