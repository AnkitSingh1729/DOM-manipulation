


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


// // Lesson : getElementbyId
// var headerTitle = document.getElementById('header-title');
// // console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);

// // headerTitle.innerHTML = '<h1>Hello</h1>';
// headerTitle.style.backgroundColor = 'grey';
// headerTitle.style.color = 'green';
// headerTitle.style.borderBottom = '3px solid #000';


// // Lesson : getElementbyclassName
// var item = document.getElementsByClassName('item');
// console.log(item);
// item[2].textContent = 'Hello 2';
// item[1].style.backgroundColor = 'green';
// for (var i = 0; i<item.length; i++){
//     item[i].style.fontWeight = 'bold';
// }


// // Lesson : getElementbyTagName
// var itemli = document.getElementsByTagName('li');
// console.log(itemli);
// itemli[2].textContent = 'Item 2';
// itemli[1].style.backgroundColor = 'green';
// for (var i = 0; i<itemli.length; i++){
//     itemli[i].style.fontWeight = 'bold';
// }


// Lesson : query Selector
var header = document.querySelector('#header-title');
header.style.borderBottom = '4px solid #ccc';
// itemq[1].style.backgroundColor = 'green';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.item:nth-child(2)');
// lastitem.style.backgroundColor = 'green';
// var invisibleitem = document.getElementsByClassName('item');
// invisibleitem[2].style.visibility = 'hidden';




// query selector all
var item = document.querySelectorAll('.item');
console.log(item);
item[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd');
var even = document.querySelectorAll('li:nth-child(even');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}



// Traversing the dom
var itemlist = document.querySelector('.items');
// console.log(itemlist);
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.color = "#f3f3f3"


// childNodes
// console.log(itemlist.childNodes);   // it includes line break
// console.log(itemlist.children);       // ignores line break and just give actual children
// itemlist.children[1].style.backgroundColor = 'green';
// console.log(itemlist.children[1]);


// // First child
// console.log(itemlist.firstChild);
// // First element child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

// // last element child
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);

// // next sibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);


// // previous sibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);


// create Element
// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('tittle', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

console.log(h1);
console.log(container);
console.log(newDiv);