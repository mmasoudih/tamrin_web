// const radiusInput = document.querySelector('.radius');
// const sectionLeft = document.querySelector('.sectionLeft');
var rectangleIsFilled = 0;
function getElement(classNameOrId){
	return document.querySelector(classNameOrId);
}
function setError(element,errorClass) {
	getElement(element).classList.add(errorClass);
}
function removeError(element,errorClass){
	getElement(element).classList.remove(errorClass);
}
function question1() {
axios.get(`http://localhost:8585/answers/circle_radius.php?radius=${getElement('.radius').value}`)
	.then(res => {
		
		getElement('.sectionLeftQ1').innerHTML = `
			<p>
				<strong>مساحت دایره :</strong>
				<span>${res.data.environment}</span>
			</p>
			<p>
				<strong>مساحت دایره (رند شده):</strong>
				<span>${res.data.environment_round}</span>
			</p>
			<p>
				<strong>محیط دایره :</strong>
				<span>${res.data.area}</span>
			</p>
			<p>
				<strong>محیط دایره (رند شده):</strong>
				<span>${res.data.area_round}</span>
			</p>
			<p>
				<strong>قطر دایره:</strong>
				<span>${res.data.diameter}</span>
			</p>`;
	})
	
}
function fillRectangle(el){
	if(el.checked){
		rectangleIsFilled = 1;	
		question2();
	}else{
		rectangleIsFilled = 0;
		question2();
	}
	
}
function question2() {
	
axios.get(`http://localhost:8585/answers/print_rectangle.php?n=${getElement('.n').value}&m=${getElement('.m').value}&filled=${rectangleIsFilled}`)
	.then(res => {
		
		getElement('.sectionLeftQ2').innerHTML = `
			<pre>
				${res.data.rectangle}
			</pre>
			`;
	})
	
}

document.body.addEventListener('input', e =>{
	
		if(e.target.classList.contains('radius')){
			if(Math.sign(e.target.value) > 0){
				question1();
				setError('.radius','success');
				removeError('.radius','error');
			}else{
				removeError('.radius','success');
				setError('.radius','error');
			}
			
		}
		if(Math.sign(e.target.value) > 0){
			question2();
			

		}
		else{
		getElement('.sectionLeft').innerHTML = '';
			
		}
})
