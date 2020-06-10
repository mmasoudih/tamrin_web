const radiusInput = document.querySelector('.radius');
const sectionLeft = document.querySelector('.sectionLeft');

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
axios.get(`http://localhost:8585/answers/circle_radius.php?radius=${radiusInput.value}`)
	.then(res => {
		
		sectionLeft.innerHTML = `
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

document.body.addEventListener('input', e =>{
	console.log(Math.sign(e.target.value));
	
		if(Math.sign(e.target.value) > 0){
			question1();
			setError('.radius','success');
			removeError('.radius','error');

		}
		else{
		sectionLeft.innerHTML = '';
			removeError('.radius','success');
			setError('.radius','error');
		}
		

})
