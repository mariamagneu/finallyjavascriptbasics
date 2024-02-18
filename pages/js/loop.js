document.addEventListener('DOMContentLoaded', function() {


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const decision of people) {
	if (decision === "Phil" || decision === "Lola") {
	refused.textContent += ` ${decision}, `;
	} else { 
	admitted.textContent +=` ${decision}, `;
	}
}
});