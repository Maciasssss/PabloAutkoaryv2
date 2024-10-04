/* alerts.js */
// Function to show alerts
function showAlert(type, message) {
    const alert = document.getElementById(`${type}-alert`);
    if (alert) {
        // Update the message content
        alert.querySelector('strong').textContent = type === 'success' ? 'Success!' : 'Error!';
        const messageText = alert.querySelector('strong').nextSibling;
        if (messageText) {
            messageText.textContent = ` ${message}`;
        }

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
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            return response.text().then(text => { throw new Error(text) });
        })
        .then(data => {
            // Show success alert with server response
            showAlert('success', data);
            form.reset();
        })
        .catch(error => {
            // Show error alert with error message
            showAlert('error', error.message || 'There was a problem sending your message.');
            console.error('Error:', error);
        });
    });
});
