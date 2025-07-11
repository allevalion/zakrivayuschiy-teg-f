const imageLabels = document.querySelectorAll('.card__image-label');

for (let idx = 0; idx < imageLabels.length; idx++) {
  const el = imageLabels[idx];

  el.onclick = function () {
    const text = el.innerText;
    const chars = '!@#%&0123456789^*()_+-=[]{};:,.?';
    let pos = 0;

    const scramble = setInterval(() => {
      let altered = '';

      for (let c = 0; c < text.length; c++) {
        if (c < pos) {
          altered += text[c];
        } else {
          altered += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.innerText = altered;
      pos++;

      if (pos > text.length) {
        clearInterval(scramble);
        el.innerText = text;
      }
    }, 45);
  };
}
