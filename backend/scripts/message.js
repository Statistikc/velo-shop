document.getElementById('notifyForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            fetch('/api/notify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, subject, message }),
            })
                .then(response => response.text())
                .then(data => {
                    alert(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });