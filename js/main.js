document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });

  // Workflow diagram hover effects
  const level1Items = document.querySelectorAll('.level-1-item');
  const level2Containers = document.querySelectorAll('.level-2');
  const level2Items = document.querySelectorAll('.level-2-item');
  const level3 = document.getElementById('level-3');

  const level3Content = {
    a1: 'We extract information from websites automatically. You’ll get real-time access to pricing, products, and more — without manual copy-paste.',
    a2: 'We pull data directly from mobile apps. If your competitors or suppliers only use mobile platforms, we’ll still get the insights you need.',
    a3: 'We digitize data from offline formats like PDFs, images, or documents. You send it, we convert it into clean, usable data.',
    b1: 'We remove duplicates, errors, and irrelevant details. Your data stays accurate and reliable.',
    b2: 'We shape your data into the format you need. Whether it’s for spreadsheets, dashboards, or analysis tools, we make it easy to use.',
    b3: 'We check your data for consistency and accuracy. No more second-guessing or bad numbers.',
    c1: 'We organize and store your data securely. Cloud-based or local — your data is always available, always safe.',
    c2: 'We turn your data into simple dashboards and reports. Understand trends, performance, and insights at a glance.',
    d1: 'We automate your repetitive tasks and data flows. From collecting to analyzing — it just runs.',
    d2: 'We watch your data sources for updates. Whether prices change or new products appear — you’ll be the first to know.',
    d3: 'We run tasks automatically on your schedule. Daily reports, weekly updates, monthly syncs — done without a reminder.',
    d4: 'We notify you when something important happens. Instant updates via email, app, or dashboard.'
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

  // Carousel functionality
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 20; // Include margin
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Contact form validation and submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
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
});