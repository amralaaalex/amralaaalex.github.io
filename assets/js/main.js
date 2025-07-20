   document.addEventListener('DOMContentLoaded', () => {
     // Smooth scrolling for nav links
     document.querySelectorAll('.nav a').forEach(link => {
       link.addEventListener('click', e => {
         e.preventDefault();
         const href = link.getAttribute('href');
         const [path, hash] = href.split('#');
         const isHomeLink = path === '/' || path === '' || path === '{{ "/" | relative_url }}';

         if (hash && (isHomeLink || window.location.pathname !== '/')) {
           if (window.location.pathname !== '/') {
             window.location.href = `/${hash ? '#' + hash : ''}`;
           } else {
             const targetSection = document.getElementById(hash);
             if (targetSection) {
               window.scrollTo({
                 top: targetSection.offsetTop - 60,
                 behavior: 'smooth'
               });
             }
           }
         } else {
           window.location.href = href;
         }
       });
     });

     // Workflow diagram hover effects (comment out if unused)
     const level1Items = document.querySelectorAll('.level-1-item');
     const level2Containers = document.querySelectorAll('.level-2');
     const level2Items = document.querySelectorAll('.level-2-item');
     const level3 = document.getElementById('level-3');
     const level3Content = {
       a1: 'We extract information from websites automatically.',
       a2: 'We pull data directly from mobile apps.',
       a3: 'We digitize data from offline formats like PDFs.',
       b1: 'We remove duplicates, errors, and irrelevant details.',
       b2: 'We shape your data into the format you need.',
       b3: 'We check your data for consistency and accuracy.',
       c1: 'We organize and store your data securely.',
       c2: 'We turn your data into simple dashboards and reports.',
       d1: 'We automate your repetitive tasks and data flows.',
       d2: 'We watch your data sources for updates.',
       d3: 'We run tasks automatically on your schedule.',
       d4: 'We notify you when something important happens.'
     };

     level1Items.forEach(item => {
       item.addEventListener('mouseenter', () => {
         level2Containers.forEach(container => container.style.display = 'none');
         const id = item.getAttribute('data-id');
         document.getElementById(`level-2-${id}`).style.display = 'flex';
       });
     });

     level2Items.forEach(item => {
       item.addEventListener('mouseenter', () => {
         const id = item.getAttribute('data-id');
         level3.textContent = level3Content[id];
       });
       item.addEventListener('mouseleave', () => {
         level3.textContent = '';
       });
     });

     // Handle multiple carousels
     document.querySelectorAll('.carousel').forEach(carousel => {
       const track = carousel.querySelector('.carousel-track');
       const items = carousel.querySelectorAll('.carousel-item');
       const prevButton = carousel.querySelector('.carousel-prev');
       const nextButton = carousel.querySelector('.carousel-next');
       let currentIndex = 0;

       // Clone items for infinite loop
       items.forEach(item => {
         const clone = item.cloneNode(true);
         track.appendChild(clone);
       });
       const allItems = track.querySelectorAll('.carousel-item');

       // Style items based on viewport
       function updateItemStyles() {
         const isMobile = window.innerWidth <= 768;
         allItems.forEach(item => {
           item.style.flex = isMobile ? '0 0 100%' : '0 0 33.33%';
           item.style.display = 'block';
         });
       }

       // Update carousel
       function updateCarousel() {
         const width = window.innerWidth <= 768 ? 100 : 33.33;
         track.style.transform = `translateX(${-currentIndex * width}%)`;
         track.style.transition = 'transform 0.3s ease-in-out';
       }

       // Initial styles and resize handler
       updateItemStyles();
       window.addEventListener('resize', updateItemStyles);

       // Previous button
       prevButton.addEventListener('click', () => {
         currentIndex--;
         if (currentIndex < 0) {
           currentIndex = items.length - 1;
           track.style.transition = 'none';
           track.style.transform = `translateX(${-currentIndex * (window.innerWidth <= 768 ? 100 : 33.33)}%)`;
           setTimeout(() => {
             track.style.transition = 'transform 0.3s ease-in-out';
           }, 0);
         }
         updateCarousel();
       });

       // Next button
       nextButton.addEventListener('click', () => {
         currentIndex++;
         if (currentIndex >= items.length) {
           currentIndex = 0;
           track.style.transition = 'none';
           track.style.transform = `translateX(0%)`;
           setTimeout(() => {
             track.style.transition = 'transform 0.3s ease-in-out';
           }, 0);
         }
         updateCarousel();
       });

       // Auto-advance every 5 seconds
       setInterval(() => {
         currentIndex++;
         if (currentIndex >= items.length) {
           currentIndex = 0;
           track.style.transition = 'none';
           track.style.transform = `translateX(0%)`;
           setTimeout(() => {
             track.style.transition = 'transform 0.3s ease-in-out';
           }, 0);
         }
         updateCarousel();
       }, 5000);

       // Initial update
       updateCarousel();
     });

     // Contact form validation and submission
     const form = document.getElementById('contact-form');
     if (form) {
       form.addEventListener('submit', e => {
         e.preventDefault();
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const message = document.getElementById('message').value;

         if (name && email && message) {
           if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
             alert(`Message sent to info@dataautomationxp.com\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
             form.reset();
           } else {
             alert('Please enter a valid email address.');
           }
         } else {
           alert('Please fill out all fields.');
         }
       });
     }
   });
   