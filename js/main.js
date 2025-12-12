// Core JS utilities for حدائق الياسمين
document.addEventListener('DOMContentLoaded',function(){
  // Nav toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click',()=>{
      navMenu.classList.toggle('open');
    });
    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>navMenu.classList.remove('open'));
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item .faq-question').forEach(q=>{
    q.addEventListener('click',()=>{
      q.parentElement.classList.toggle('open');
    })
  });

  // Video filters (improved)
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      const videos = document.querySelectorAll('.video-item');
      let visible = 0;
      videos.forEach(item=>{
        const show = (f==='all' || item.dataset.filter===f);
        item.style.display = show ? 'block' : 'none';
        item.style.opacity = show ? '1' : '0';
        if(show) visible++;
      });
      // Show message if no videos
      if(visible === 0) console.log('No videos found for filter: ' + f);
    })
  });

  // Booking form -> WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = bookingForm.querySelector('input[type="text"]')?.value || '';
      const email = bookingForm.querySelector('input[type="email"]')?.value || '';
      const phone = bookingForm.querySelector('input[type="tel"]')?.value || '';
      const service = bookingForm.querySelector('select')?.value || '';
      const notes = bookingForm.querySelector('textarea')?.value || '';
      
      const whatsappPhone = '+96566568372';
      const message = encodeURIComponent(`📋 طلب خدمة جديد\n\n👤 الاسم: ${name}\n📧 البريد: ${email}\n📱 الهاتف: ${phone}\n🛠️ الخدمة: ${service}\n💬 الملاحظات: ${notes}`);
      window.open(`https://wa.me/${whatsappPhone.replace('+','')}?text=${message}`,'_blank');
      bookingForm.reset();
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
      const io = new IntersectionObserver(entries=>{ 
        entries.forEach(ent=>{ 
          if(ent.isIntersecting){ 
            const i=ent.target; 
            i.src = i.dataset.src || i.src; 
            i.classList.add('loaded');
            io.unobserve(i); 
          }
        }); 
      });
      if(img.dataset.src) io.observe(img);
    }
  });
  
  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    })
  });
});
