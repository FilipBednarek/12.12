const submit = document.querySelector('#submit');
const erease = document.querySelector('#erease');

let array = [];
const name = document.querySelector('#name');
const lastname = document.querySelector('#lastname');
const displayList = document.querySelector('#displayList');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  const object = {
    name: name.value,
    lastname: lastname.value,
  };

  displayList.innerHTML += ` <li>Imie: ${name.value}, Nazwisko: ${lastname.value}</li>`;

  array.push(object);
});

erease.addEventListener('click', function (e) {
  e.preventDefault();

  const object = {
    name: name.value,
    lastname: lastname.value,
  };

  displayList.innerHTML += ``;

  array.
});
