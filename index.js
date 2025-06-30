// JavaScript for modal functionality
const playButton = document.getElementById('playButton');
const videoModal = document.getElementById('videoModal');
const closeModalBtn = document.getElementById('closeModalBtn');

playButton.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
});

closeModalBtn?.addEventListener('click', () => {
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
const closeAllBrandsModalBtn = document.getElementById('closeAllBrandsModal');

viewAllButton.addEventListener('click', () => {
    allBrandsModal.classList.remove('hidden');
});

closeAllBrandsModalBtn?.addEventListener('click', () => {
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

// Download Contact Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadNowBtn = document.getElementById('downloadNowBtn');
    const downloadContactModal = document.getElementById('downloadContactModal');
    const closeDownloadModal = document.getElementById('closeDownloadModal');
    const closeDownloadModalBtn = document.getElementById('closeDownloadModalBtn');
    const findDealerBtn = document.getElementById('findDealerBtn');

    // Open download contact modal
    downloadNowBtn?.addEventListener('click', () => {
        downloadContactModal?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close modal functions
    const closeDownloadModalFunction = () => {
        downloadContactModal?.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    closeDownloadModal?.addEventListener('click', closeDownloadModalFunction);
    closeDownloadModalBtn?.addEventListener('click', closeDownloadModalFunction);

    // Close modal when clicking outside
    downloadContactModal?.addEventListener('click', (e) => {
        if (e.target === downloadContactModal) {
            closeDownloadModalFunction();
        }
    });

    // Find dealer button functionality
    findDealerBtn?.addEventListener('click', () => {
        closeDownloadModalFunction();
        document.getElementById('dealers')?.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && downloadContactModal && !downloadContactModal.classList.contains('hidden')) {
            closeDownloadModalFunction();
        }
    });
});

// Inquiry button functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle all inquiry buttons
    const inquiryButtons = [
        document.getElementById('cta-nav'),
        document.getElementById('inquiry-button'),
        document.getElementById('hero-inquiry-btn')
    ];

    inquiryButtons.forEach(button => {
        button?.addEventListener('click', () => {
            // Smooth scroll to contact section
            document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Optional: Focus on the name input field after scrolling
            setTimeout(() => {
                const nameInput = document.querySelector('input[name="name"]');
                nameInput?.focus();
            }, 1000);
        });
    });
});
