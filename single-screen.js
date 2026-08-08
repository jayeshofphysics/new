(() => {
  const details = Array.from(document.querySelectorAll('.screen-detail'));

  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });

    item.querySelectorAll('.screen-overlay-close').forEach((button) => {
      button.addEventListener('click', () => {
        item.open = false;
      });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    details.forEach((item) => {
      item.open = false;
    });
  });
})();
