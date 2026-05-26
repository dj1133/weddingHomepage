const links = document.querySelectorAll(".venue-panel");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    event.preventDefault();
    document.body.classList.add("is-leaving");
    link.classList.add("is-selected");
    window.setTimeout(() => {
      window.location.href = link.href;
    }, 520);
  });
});
