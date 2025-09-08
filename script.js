// Minimal Blog JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple image loading effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Simple focus management for accessibility
document.addEventListener('keydown', (e) => {
    // Remove focus styles when using mouse
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});

// Add minimal CSS for focus management
const style = document.createElement('style');
style.textContent = `
    body:not(.using-keyboard) *:focus {
        outline: none;
    }
`;
document.head.appendChild(style);