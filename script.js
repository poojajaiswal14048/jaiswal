// Basic interactions: mobile nav toggle, menu filtering, form validation, dynamic year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const body = document.body;
  navToggle && navToggle.addEventListener('click', function(){
    body.classList.toggle('nav-open');
  });

  // Menu filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      menuCards.forEach(card => {
        if(cat === 'all' || card.dataset.cat === cat){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
      // scroll to menu slightly
      document.getElementById('menu')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Contact form simple validation and mailto fallback
  const contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !phone){
      alert('Please enter your name and phone number.');
      return;
    }
    if(!/^\d{10}$/.test(phone)){
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Create mailto with content
    const to = 'poojajaiswal14048@gmail.com';
    const subject = encodeURIComponent('Booking / Message from website: ' + name);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  yearEl && (yearEl.textContent = new Date().getFullYear());
});