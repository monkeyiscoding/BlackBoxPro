// JavaScript for modal functionality
const playButton = document.getElementById('playButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.querySelector('.close-button');

playButton.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    videoModal.classList.add('hidden');
});

// Close modal when clicking outside of the modal content
videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.add('hidden');
    }
});

       const viewAllButton = document.getElementById('viewAllButton');
    const allBrandsModal = document.getElementById('allBrandsModal');
    const closeButton2 = document.querySelector('.close-button');

    viewAllButton.addEventListener('click', () => {
        allBrandsModal.classList.remove('hidden');
    });

    closeButton2.addEventListener('click', () => {
        allBrandsModal.classList.add('hidden');
    });

    // Close modal when clicking outside of the modal content
    allBrandsModal.addEventListener('click', (event) => {
        if (event.target === allBrandsModal) {
            allBrandsModal.classList.add('hidden');
        }
    });


document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('translate-y-0');
    mobileMenu.classList.add('-translate-y-full');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  });
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden', '-translate-y-full');
  mobileMenu.classList.add('translate-y-0');
  document.body.classList.add('overflow-hidden');
});

document.getElementById('closeAllBrandsModal')?.addEventListener('click', () => {
  document.getElementById('allBrandsModal')?.classList.add('hidden');
});
