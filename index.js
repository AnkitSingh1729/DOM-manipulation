


// Dom manipulation 2 
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        const li = document.createElement('li'); // Create a new element out of nowhere
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));  // "createTextNode", then append it to created child

        userList.appendChild(li);     // Finally append the element to main list. userList refers to element with id = "user"

        nameInput.value = '';
        emailInput.value = '';
    }
 
}

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "New Title";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

var headerTitle = document.getElementById('header-title');
// console.log(headerTitle.innerText);
console.log(headerTitle.textContent);

// headerTitle.innerHTML = '<h1>Hello</h1>';
headerTitle.style.backgroundColor = 'grey';
headerTitle.style.color = 'green';
headerTitle.style.borderBottom = '3px solid #000';