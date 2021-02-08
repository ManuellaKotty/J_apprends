
const express = require('express');
const app = express();
// const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Getting to base main landing page : logging page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});


// Getting to dashboard page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});

// Getting to base  main landing page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});
// Getting to myCourses page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});

// Getting to a course page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});

// Getting to myStats page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});

// Getting to logOut page
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Bienvenue sur la plateforme d'apprentissage du CRFP!\n`);
});

// Getting to error page
app.get('/', (req, res) => {
  res.statusCode = 4004
  res.setHeader('Content-Type', 'text/plain');
  // We're gonna render a page
  res.end(`Cette page n'est pas accessible. \n`);
});





app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});