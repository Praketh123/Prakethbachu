// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle project details when "View More" is clicked
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent project content div
            const projectContent = this.parentElement;
            
            // Get the project details div
            const projectDetails = projectContent.querySelector('.project-details');
            
            // Toggle expanded class
            projectDetails.classList.toggle('expanded');
            
            // Toggle button text and style
            if (projectDetails.classList.contains('expanded')) {
                this.textContent = 'View Less';
                this.classList.add('active');
            } else {
                this.textContent = 'View More';
                this.classList.remove('active');
            }
        });
    });
});

// Basic form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }
        
        // For a real form, you would send data to a server here
        // For now, just show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// --------------------------------------------------------------------------------------------------------------//

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-btn')) {
            navLinks.classList.remove('active');
        }
    });
}