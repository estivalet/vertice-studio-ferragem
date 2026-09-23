(function () {
  'use strict';

  /* Mobile search toggle */
  var searchToggle = document.getElementById('mobile-search-toggle');
  var searchPanel = document.getElementById('mobile-search-panel');
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', function () {
      var isOpen = searchPanel.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        var input = searchPanel.querySelector('input');
        if (input) input.focus();
      }
    });
  }

  /* Mobile drawer menu */
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var drawer = document.getElementById('mobile-drawer');
  var drawerClose = document.getElementById('mobile-drawer-close');
  var drawerBackdrop = document.getElementById('mobile-drawer-backdrop');

  function openDrawer() {
    drawer.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('.mobile-drawer-links a, .mobile-drawer-account a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* Cart counter demo (client-side only, no backend) */
  var cartCount = 0;
  var cartCountBadge = document.getElementById('cart-count');
  var cartCountText = document.getElementById('cart-count-text');

  function updateCartDisplay() {
    if (cartCountBadge) cartCountBadge.textContent = String(cartCount);
    if (cartCountText) cartCountText.textContent = cartCount + (cartCount === 1 ? ' item' : ' itens');
  }

  document.querySelectorAll('.add-to-cart').forEach(function (button) {
    button.addEventListener('click', function () {
      cartCount += 1;
      updateCartDisplay();

      var original = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<span>Adicionado ✓</span>';
      setTimeout(function () {
        button.innerHTML = original;
        button.disabled = false;
      }, 1200);
    });
  });

  updateCartDisplay();

  /* Newsletter form (client-side demo, no backend) */
  var newsletterForm = document.getElementById('newsletter-form');
  var newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var emailInput = document.getElementById('newsletter-email');
      var email = emailInput.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        newsletterFeedback.textContent = 'Digite um e-mail válido.';
        newsletterFeedback.style.color = '#F87171';
        emailInput.focus();
        return;
      }

      newsletterFeedback.textContent = 'Cadastro recebido! Fique de olho no seu e-mail.';
      newsletterFeedback.style.color = '#F5B400';
      newsletterForm.reset();
    });
  }

  /* Close mobile drawer / search panel on resize to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      if (drawer && drawer.classList.contains('is-open')) closeDrawer();
      if (searchPanel && searchPanel.classList.contains('is-open')) {
        searchPanel.classList.remove('is-open');
        searchToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
})();
