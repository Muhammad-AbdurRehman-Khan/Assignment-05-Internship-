document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });
    
    // Counter Button
    const counterButton = document.getElementById('counterButton');
    const counterDisplay = counterButton.querySelector('.counter');
    let count = 0;
    
    counterButton.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
        
        // Add pulse animation
        this.style.animation = 'pulse 0.3s';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
        
        // Create ripple effect
        createRippleEffect(this);
    });
    
    function createRippleEffect(button) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
        
        button.querySelector('.button-effects').appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Flip Card with Auto Flip Back
    const flipCard = document.getElementById('flipCard');
    let flipTimeout;
    
    flipCard.addEventListener('click', function() {
        this.classList.add('flipped');
        
        if (flipTimeout) {
            clearTimeout(flipTimeout);
        }
    });
    
    flipCard.addEventListener('mouseenter', function() {
        if (this.classList.contains('flipped')) {
            flipTimeout = setTimeout(() => {
                this.classList.remove('flipped');
            }, 800);
        }
    });
    
    flipCard.addEventListener('mouseleave', function() {
        if (flipTimeout) {
            clearTimeout(flipTimeout);
        }
    });
});