document.addEventListener('DOMContentLoaded', function() {

const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here
let contactsHTML = '';
for (let i = 0; i < phonebook.length; i++) {
    const contact = phonebook[i];
    if (contact.name === name) {
        contactsHTML += `<p>${contact.name}: ${contact.number}</p>`;
        para.innerHTML = contactsHTML;
    }
}
para.innerHTML = contactsHTML;


// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);
});