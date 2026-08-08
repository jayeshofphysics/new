(() => {
  const yearTargets = document.querySelectorAll('[data-year]');
  yearTargets.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector('.menu-button');
  const siteNav = document.querySelector('.site-nav');

  if (menuButton && siteNav) {
    const closeMenu = () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const researchCards = document.querySelectorAll('#research-grid [data-category]');

  if (filterButtons.length && researchCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.toggle('active', item === button));
        researchCards.forEach((card) => {
          const categories = (card.dataset.category || '').split(/\s+/);
          const visible = filter === 'all' || categories.includes(filter);
          card.classList.toggle('is-hidden', !visible);
        });
      });
    });
  }

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get('name') || '').trim();
      const organization = String(formData.get('organization') || '').trim();
      const subject = String(formData.get('subject') || 'Research enquiry').trim();
      const message = String(formData.get('message') || '').trim();

      const body = [
        message,
        '',
        `Name: ${name}`,
        organization ? `Organization / University: ${organization}` : ''
      ].filter(Boolean).join('\n');

      const mailto = `mailto:jayesh10042003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
})();
