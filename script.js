
    document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            var username = document.getElementById('signupUsername').value;
            var password = document.getElementById('signupForm').querySelector('input[type="password"]').value;
            var confirmPassword = document.getElementById('signupForm').querySelector('input[type="password"]:last-of-type').value;

            if (!/^[a-zA-Z0-9]+$/.test(username)) {
                document.getElementById('signupError').innerText = 'Username can only contain letters and numbers.';
            } else if (password !== confirmPassword) {
                document.getElementById('signupError').innerText = 'Passwords do not match';
            } else {
                document.getElementById('signupError').innerText = '';
                // Proceed with signup logic
                alert('Form submitted successfully!'); // Replace this with your actual submission logic
            }
            window.location.href = 'login and signup.html';
        });

        function switchPage(pageId) {
            document.getElementById('loginContainer').style.display = (pageId === 'loginContainer') ? 'block' : 'none';
            document.getElementById('signupContainer').style.display = (pageId === 'signupContainer') ? 'block' : 'none';
        }