


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