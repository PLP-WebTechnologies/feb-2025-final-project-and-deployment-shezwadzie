// 1. Active Navigation Link Highlighting
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
      link.style.fontWeight = "bold";
      link.style.color = "#ff6600";
    }
  });

  // 2. Add to Cart Functionality
  let cartCount = 0;
  const cartDisplay = document.getElementById('cart-count');
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      if (cartDisplay) {
        cartDisplay.textContent = cartCount;
      }
      alert("Product added to cart!");
    });
  });

  // 3. Contact Form Validation
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
      } else {
        alert(`Thank you, ${name}. Your message has been sent!`);
        contactForm.reset();
      }
    });
  }

  // 4. Scroll to Top Button (Optional)
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑ Top';
  scrollBtn.id = 'scrollToTop';
  document.body.appendChild(scrollBtn);

  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '20px';
  scrollBtn.style.right = '20px';
  scrollBtn.style.padding = '10px 15px';
  scrollBtn.style.display = 'none';
  scrollBtn.style.backgroundColor = '#0077cc';
  scrollBtn.style.color = '#fff';
  scrollBtn.style.border = 'none';
  scrollBtn.style.borderRadius = '5px';
  scrollBtn.style.cursor = 'pointer';

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
