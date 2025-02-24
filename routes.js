const routes = {
    '/': 'index.html', // Home page
    '/reportcard': 'report-card.html', // Report card page
    '/setreportcard': 'teacher-set-report-card.html', // Teacher set report card page
    '/studentlogin': 'pages/student-login.html', // Student login page (inside pages folder)
    '/studentsignup': 'pages/student-signup.html', // Student signup page (inside pages folder)
    '/teacherlogin': 'teacher-login.html', // Teacher login page
    '/teachersignup': 'teacher-signup.html', // Teacher signup page
    '/dashboard': 'student-dashboard.html', // Student dashboard page
};

// Function to load content based on the route
async function loadRoute(route) {
    const path = routes[route] || '404.html'; // Default to 404 if route not found

    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Page not found');
        }
        const content = await response.text();
        document.getElementById('app').innerHTML = content;
    } catch (error) {
        // If there's an error (e.g., file not found), load the 404 page
        const response = await fetch('404.html');
        const content = await response.text();
        document.getElementById('app').innerHTML = content;
    }
}

// Handle navigation
function navigateTo(route) {
    history.pushState({}, '', route);
    loadRoute(route);
}

// Handle back/forward navigation
window.addEventListener('popstate', () => {
    const route = window.location.pathname;
    loadRoute(route);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    const route = window.location.pathname;
    loadRoute(route);
});

// Add event listeners to all links for client-side navigation
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const route = new URL(e.target.href).pathname;
        navigateTo(route);
    }
});
