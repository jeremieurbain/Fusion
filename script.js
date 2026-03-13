{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const cursor = document.getElementById('custom-cursor');\
const preview = document.getElementById('preview');\
const previewImg = preview.querySelector('img');\
const films = document.querySelectorAll('.film');\
\
// Custom Cursor and Preview Movement\
window.addEventListener('mousemove', (e) => \{\
    // Move Cursor\
    cursor.style.left = e.clientX + 'px';\
    cursor.style.top = e.clientY + 'px';\
    \
    // Move Preview Image (with offset to stay clear of cursor)\
    preview.style.left = (e.clientX + 40) + 'px';\
    preview.style.top = (e.clientY - (preview.offsetHeight / 2)) + 'px';\
\});\
\
// Hover States\
films.forEach(film => \{\
    film.addEventListener('mouseenter', () => \{\
        preview.style.opacity = 1;\
        previewImg.src = film.dataset.img;\
    \});\
\
    film.addEventListener('mouseleave', () => \{\
        preview.style.opacity = 0;\
    \});\
\});}