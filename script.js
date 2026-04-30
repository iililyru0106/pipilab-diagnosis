// Common JavaScript functions for the diagnosis website

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[type="radio"]');
    const groups = {};
    
    inputs.forEach(input => {
        const name = input.name;
        if (!groups[name]) {
            groups[name] = false;
        }
        if (input.checked) {
            groups[name] = true;
        }
    });
    
    for (const group in groups) {
        if (!groups[group]) {
            return false;
        }
    }
    return true;
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD'
    }).format(value);
}

// Format number with commas
function formatNumber(value) {
    return value.toLocaleString('zh-TW');
}

// Calculate percentage
function calculatePercentage(part, total) {
    return Math.round((part / total) * 100);
}

// Store data in localStorage
function storeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Retrieve data from localStorage
function retrieveData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Clear data from localStorage
function clearData(key) {
    localStorage.removeItem(key);
}

// Add event listener for form submission
function setupFormSubmission(formId, callback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form)) {
                callback();
            } else {
                alert('請完成所有問題');
            }
        });
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scrollTopBtn');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Mobile menu toggle
function setupMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navBrand = document.querySelector('.nav-brand');
    
    if (window.innerWidth <= 768) {
        // Mobile menu setup if needed
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Prevent form submission on Enter key for radio buttons
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.type === 'radio') {
        e.preventDefault();
    }
});

// Analytics tracking (optional)
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Error handling
function handleError(error) {
    console.error('Error:', error);
    alert('發生錯誤，請重新整理頁面後再試一次');
}

// Success message
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #D4A574;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
