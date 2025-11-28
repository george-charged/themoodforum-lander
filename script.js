document.getElementById('interest-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // For now, just log the data and show success
    // In production, you'd send this to a backend or service like Formspree, Netlify Forms, etc.
    console.log('Interest registered:', { name, email });
    
    // Store in localStorage as a simple demo
    const interests = JSON.parse(localStorage.getItem('moodForumInterests') || '[]');
    interests.push({ name, email, timestamp: new Date().toISOString() });
    localStorage.setItem('moodForumInterests', JSON.stringify(interests));
    
    // Show success modal
    document.getElementById('success-modal').classList.remove('hidden');
    
    // Reset form
    this.reset();
});

function closeModal() {
    document.getElementById('success-modal').classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('success-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

