/* alerts.js */
// Function to show alerts
function showAlert(type, message) {
    const alert = document.getElementById(`${type}-alert`);
    if (alert) {
        // Update the message content
        alert.innerHTML = `<strong>${type === 'success' ? ' ' : ' '}</strong> ${message}`;

        // Display the alert
        alert.style.display = 'flex';
        alert.classList.add('show');

        // Automatically hide the alert after 5 seconds
        setTimeout(() => {
            closeAlert(`${type}-alert`);
        }, 5000);
    }
}

// Function to close alerts
function closeAlert(id) {
    const alert = document.getElementById(id);
    if (alert) {
        alert.classList.remove('show');
        setTimeout(() => {
            alert.style.display = 'none';
        }, 500); 
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.Contact-Form form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('submit-form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showAlert('success', data.message);
                form.reset();
            } else {
                showAlert('error', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showAlert('error', 'An unexpected error occurred. Please try again later.');
        });
    });
});