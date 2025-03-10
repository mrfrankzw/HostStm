const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define routes based on your vercel.json
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/download-application', (req, res) => {
  res.redirect('https://github.com/mrfrank-ofc/STM/raw/main/admin/stmarys_application_form.pdf');
});

app.get('/faculty', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'faculty.html'));
});

app.get('/staff', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'stuff.html'));
});

app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'reports.html'));
});

app.get('/viewreports', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'viewreports.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'gallery.html'));
});

app.get('/apply', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student-application.html'));
});

app.get('/adminapplication', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'admin-application.html'));
});

app.get('/reportcard', (req, res) => {
  res.sendFile(path.join(__dirname, 'reportcard.html'));
});

app.get('/setreportcard', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'teacher-set-report.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student-login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student-signup.html'));
});

app.get('/teacherslogin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin-login.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
});

app.get('/credits', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'credits.html'));
});

app.get('/teacherssignup', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin-signup.html'));
});

app.get('/teachersdashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'teachers-dashboard.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student-dashboard.html'));
});

app.get('/teacherusers', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'teacher-users.html'));
});

app.get('/studentusers', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student-users.html'));
});

// Catch-all route to serve index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
