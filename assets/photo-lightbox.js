const photoCards = document.querySelectorAll('.photo-card');

if (photoCards.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'photo-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button type="button" class="photo-lightbox-close" aria-label="Close photo">Close</button>
    <figure class="photo-lightbox-frame">
      <img src="" alt="" decoding="async">
      <figcaption></figcaption>
    </figure>
  `;
  document.body.append(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('figcaption');
  const closeButton = lightbox.querySelector('.photo-lightbox-close');
  let lastFocusedCard = null;

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    document.body.classList.remove('has-photo-lightbox');
    lastFocusedCard?.focus();
  };

  photoCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const image = card.querySelector('img');
      const title = card.querySelector('strong')?.textContent || image?.alt || 'Photo';
      const description = card.querySelector('.photo-card-copy span')?.textContent || '';
      lastFocusedCard = card;
      lightboxImage.src = card.href;
      lightboxImage.alt = image?.alt || title;
      lightboxCaption.textContent = description ? title + ' - ' + description : title;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('has-photo-lightbox');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}
