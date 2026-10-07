document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Hamburguesa
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav--active');
    });
  }

  // 2. Modo Oscuro con LocalStorage
  const themeToggle = document.querySelector('#dark-mode-toggle');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }

  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // 3. Smooth Scroll y Cierre de Menú en Móvil
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Cerrar menú si está abierto en versión móvil
        navMenu?.classList.remove('nav--active');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 4. Formulario de Contacto con Validación JS
  const contactForm = document.querySelector('#contact-form');
  
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpiar errores previos
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    const feedback = document.querySelector('#form-feedback');
    feedback.textContent = '';

    let isValid = true;

    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');

    if (!nombre.value.trim()) {
      document.querySelector('#error-nombre').textContent = 'Por favor ingresa tu nombre.';
      isValid = false;
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      document.querySelector('#error-email').textContent = 'Ingresa un correo electrónico válido.';
      isValid = false;
    }

    if (!mensaje.value.trim()) {
      document.querySelector('#error-mensaje').textContent = 'El mensaje no puede estar vacío.';
      isValid = false;
    }

    if (isValid) {
      feedback.style.color = 'var(--color-exito)';
      feedback.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
      contactForm.reset();
    }
  });
});