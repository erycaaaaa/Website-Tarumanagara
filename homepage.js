
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.dropdown-toggle');
    const menu = document.querySelector('.dropdown-menu');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Biar gak langsung ditutup
        menu.classList.toggle('show');
      });

      window.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
          menu.classList.remove('show');
        }
      });
    }
  });

   // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size between 2-6px
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 15 + 's';
                
                // Random animation duration
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Handle registration button click
        function handleRegistration() {
            // Add click animation
            const button = event.target;
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.transform = '';
                alert('Registration form would open here!');
            }, 150);
        }

        // Initialize particles when page loads
        window.addEventListener('load', createParticles);

        // Add scroll effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-section');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('.register-button');

    registerButton.addEventListener('click', () => {
        alert('Tombol "Register now" diklik!');
        // Anda bisa menambahkan logika lain di sini, seperti:
        // - Mengarahkan pengguna ke halaman pendaftaran
        // window.location.href = 'halaman-pendaftaran.html';
        // - Menampilkan modal
        // - Mengirim data ke server
    });
});