const routes = {
    '/': 'index.html',
    '/reportcard': 'report-card.html',
    '/setreportcard': 'teacher-set-report-card.html',
    '/studentlogin': 'student-login.html',
    '/studentsignup': 'student-signup.html',
    '/teacherlogin': 'teacher-login.html',
    '/teachersignup': 'teacher-signup.html',
    '/dashboard': 'student-dashboard.html',
};

// Function to load content based on the route
async function loadRoute(route) {
    const path = routes[route] || '404.html'; // Default to 404 if route not found
    const response = await fetch(path);
    const content = await response.text();
    document.getElementById('app').innerHTML = content;
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
