const body = document.body;
const p = document.createElement('p');

p.textContent = 'Appended text';
p.classList.add('text-xl');
p.classList.add('font-bold');
body.append(p);