// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission (to avoid page refresh)

    const emailInput = document.getElementById('emailInput');
    const userEmail = emailInput.value;

    if (userEmail.trim() !== '') {
        // Here, you can perform actions with the email, such as sending it to a server or displaying it
        alert(`Submitted Email: ${userEmail}`);
        // You can also reset the input field after submission if needed
        emailInput.value = '';
    } else {
        // Handling empty email submission
        alert('Please enter a valid email address.');
    }
}

// Event listener for the submit button click
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', handleSubmit);
// Function to handle sign-in for returning users
function handleSignIn() {
    const previousEmail = localStorage.getItem('userEmail');

    if (previousEmail) {
        const signInEmail = prompt('Please enter your email to sign in:');
        if (signInEmail === previousEmail) {
            alert('Sign in successful!');
            // You can perform actions here for a successful sign-in
        } else {
            alert('Incorrect email. Please try again.');
            // You can handle incorrect email scenarios here
        }
    } else {
        alert('No previous email found. Please sign up.');
        // You can handle scenarios where there's no previous email stored
    }
}

// Event listener for the sign-in button click
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', handleSignIn);
// JavaScript for handling language selection change
const languageSelect = document.getElementById('languageSelect');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    
    // Example: Redirecting to a different page based on language selection
    if (selectedLanguage === 'english') {
        window.location.href = 'https://www.netflix.com/in/'; // Replace with your English page URL
    } else if (selectedLanguage === 'hindi') {
        window.location.href = 'https://www.netflix.com/in-hi/'; // Replace with your Hindi page URL
    }
    // You can add more logic here based on the selected language
});
