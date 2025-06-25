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