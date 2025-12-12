// Core JS utilities for حدائق الياسمين
document.addEventListener('DOMContentLoaded',function(){
  // Nav toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click',()=>{
      navMenu.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item .faq-question').forEach(q=>{
    q.addEventListener('click',()=>{
      q.parentElement.classList.toggle('open');
    })
  });

  // Video filters
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.video-item').forEach(item=>{
        if(f==='all' || item.dataset.filter===f) item.style.display='block'; else item.style.display='none';
      });
    })
  });

  // Booking form -> WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      const inputs = bookingForm.querySelectorAll('input, textarea, select');
      const data = {};
      inputs.forEach(inp=>{ if(inp.name || inp.placeholder){ const key = inp.name || inp.placeholder; data[key]=inp.value; }});
      const phone = '+96566568372';
      const message = encodeURIComponent(`طلب خدمة من الموقع\nالاسم: ${bookingForm.querySelector('input[type="text"]').value || ''}\nالهاتف: ${bookingForm.querySelector('input[type="tel"]').value || ''}\nالبريد: ${bookingForm.querySelector('input[type="email"]').value || ''}\nالخدمة: ${bookingForm.querySelector('select').value || ''}\nملاحظة: ${bookingForm.querySelector('textarea').value || ''}`);
      window.open(`https://wa.me/${phone.replace('+','')}?text=${message}`,'_blank');
    })
  }

  // Cookie banner simple (hide after accept)
  const cookieBanner = document.getElementById('cookieBanner');
  if(cookieBanner){
    const accept = cookieBanner.querySelector('.accept');
    if(localStorage.getItem('jasmine_cookie_accepted')) cookieBanner.style.display='none';
    if(accept){
      accept.addEventListener('click',()=>{ localStorage.setItem('jasmine_cookie_accepted','1'); cookieBanner.style.display='none'; });
    }
  }

  // Lazy images
  document.querySelectorAll('img[loading="lazy"]').forEach(img=>{
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(entries=>{ entries.forEach(ent=>{ if(ent.isIntersecting){ const i=ent.target; i.src = i.dataset.src || i.src; io.unobserve(i); }}); });
      if(img.dataset.src) io.observe(img);
    }
  });
});
