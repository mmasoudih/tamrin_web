// const radiusInput = document.querySelector('.radius');
// const sectionLeft = document.querySelector('.sectionLeft');

particlesJS.load('particles-js', '/assets/js/particlesjs-config.json', function () {

});


var rectangleIsFilled = 0;

function getElement(classNameOrId) {
	return document.querySelector(classNameOrId);
}

function setError(element, errorClass) {
	getElement(element).classList.add(errorClass);
}

function removeError(element, errorClass) {
	getElement(element).classList.remove(errorClass);
}

function fillRectangle(el) {
	if (el.checked) {
		rectangleIsFilled = 1;
		question2();
	} else {
		rectangleIsFilled = 0;
		question2();
	}

}

function question1() {
	if (getElement('.radius').value !== '') {
		if (Math.sign(getElement('.radius').value) > 0){
			axios.get(`/answers/answers.php?q1&radius=${getElement('.radius').value}`)
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
		}else {
			getElement('.sectionLeftQ1').innerHTML = `
			
			<span style='color:red'>عدد منفی یا صفر وارد نکنید</span>
		
		`;
		}
	
	}
}

// function question2() {

// axios.get(`http://localhost:8585/answers/print_rectangle.php?n=${getElement('.n').value}&m=${getElement('.m').value}&filled=${rectangleIsFilled}`)
// 	.then(res => {

// 		getElement('.sectionLeftQ2').innerHTML = `
// 			<pre>
// 				${res.data.rectangle}
// 			</pre>
// 			`;
// 	})

// }
function question2() {
	if (getElement('.number1').value !== '' && getElement('.number2').value !== '') {
		if (Math.sign(getElement('.number1').value) > 0 &&
			Math.sign(getElement('.number2').value) > 0) {
			axios.get(`/answers/answers.php?q2&a=${getElement('.number1').value}&b=${getElement('.number2').value}`)
				.then(res => {
					getElement('.answer').innerHTML = `
				<span>${res.data.result}</span>
			`;
				})
		} else {
			getElement('.answer').innerHTML = `
			
			<span style='color:red'>عدد منفی یا صفر وارد نکنید</span>
		
		`;
		}

	} else {
		getElement('.answer').innerHTML = `
			
			<span style='color:red'>همه اعداد را وارد کنید</span>
		
		`;


	}
}

function question2_1() {
	if (getElement('.numbers1').value !== '' && getElement('.numbers2').value !== '') {
		if (Math.sign(getElement('.numbers1').value) > 0 &&
			Math.sign(getElement('.numbers2').value) > 0) {
			axios.get(`/answers/answers.php?q2_1&a=${getElement('.numbers1').value}&b=${getElement('.numbers2').value}`)
				.then(res => {
					getElement('.answer1').innerHTML = `
				<span>${res.data.result}</span>
			`;
				})
		} else {
			getElement('.answer1').innerHTML = `
			
			<span style='color:red'>عدد منفی یا صفر وارد نکنید</span>
		
		`;
		}

	} else {
		getElement('.answer1').innerHTML = `
			
			<span style='color:red'>همه اعداد را وارد کنید</span>
		
		`;


	}
}


function question3() {
	if (getElement('.radius_1').value !== '' && getElement('.radius_2').value !== '' && getElement('.radius_3').value !== '') {
		if (Math.sign(getElement('.radius_1').value) > 0 &&
			Math.sign(getElement('.radius_2').value) > 0 &&
			Math.sign(getElement('.radius_3').value) > 0) {
			axios.get(`/answers/answers.php?q_3&x=${getElement('.radius_1').value}&y=${getElement('.radius_2').value}&z=${getElement('.radius_3').value}`)
				.then(res => {
					getElement('.sectionLeftQ3').innerHTML = `
					<p>
			<strong style='text-align:center'>${res.data.result}</strong>
		</p>
				
			`;
				})
		} else {
			getElement('.sectionLeftQ3').innerHTML = `
			<p>
			<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
		</p>
		`;
		}

	} else {
		getElement('.sectionLeftQ3').innerHTML = `
			<p>
			<strong style='color:red'>همه اعداد را وارد کنید</strong>
		</p>
		`;
	}
}

function question4() {
	if (getElement('.numberQ4').value !== '') {
		if (Math.sign(getElement('.numberQ4').value) > 0) {
			axios.get(`/answers/answers.php?q_4&n=${getElement('.numberQ4').value}`)
				.then(res => {
					console.log(res);
					getElement('.sectionLeftQ4').innerHTML = `
				<p>
				<strong>حاصل  :</strong>
				<span>${res.data.result}</span>
			</p>
			`;
				})
		} else {
			getElement('.sectionLeftQ4').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	}


}


function question5() {
	if (getElement('.numberQ5_1').value !== '' && getElement('.numberQ5_2').value !== '' && getElement('.numberQ5_3').value !== '') {
		if (Math.sign(getElement('.numberQ5_1').value) > 0 &&
			Math.sign(getElement('.numberQ5_2').value) > 0 &&
			Math.sign(getElement('.numberQ5_3').value) > 0
		) {
			axios.get(`/answers/answers.php?q_5&x=${getElement('.numberQ5_1').value}&y=${getElement('.numberQ5_2').value}&z=${getElement('.numberQ5_3').value}`)
				.then(res => {
					console.log(res);
					getElement('.sectionLeftQ5').innerHTML = `
				<p>
				<strong>حاصل  :</strong>
				<span>${res.data.result}</span>
			</p>
			`;
				})
		} else {
			getElement('.sectionLeftQ5').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	} else {
		getElement('.sectionLeftQ5').innerHTML = `
				<p>
				<strong style='color:red'>همه اعداد را وارد کنید</strong>
			</p>
			`;
	}
}



function question6() {
	if (getElement('.numberQ6_1').value !== '' && getElement('.numberQ6_2').value !== '') {
		if (Math.sign(getElement('.numberQ6_1').value) > 0 &&
			Math.sign(getElement('.numberQ6_2').value) > 0
		) {
			axios.get(`/answers/answers.php?q_6&x=${getElement('.numberQ6_1').value}&y=${getElement('.numberQ6_2').value}`)
				.then(res => {
					console.log(res);
					getElement('.sectionLeftQ6').innerHTML = `
				<p>
				<strong>حاصل  :</strong>
				<span>${res.data.result}</span>
			</p>
			`;
				})
		} else {
			getElement('.sectionLeftQ6').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	} else {
		getElement('.sectionLeftQ6').innerHTML = `
				<p>
				<strong style='color:red'>همه اعداد را وارد کنید</strong>
			</p>
			`;
	}
}

function question7() {
	if (getElement('.numberQ7_1').value !== '' && getElement('.numberQ7_2').value !== '') {
		if (Math.sign(getElement('.numberQ7_1').value) > 0 &&
			Math.sign(getElement('.numberQ7_2').value) > 0
		) {
			axios.get(`/answers/answers.php?q_7&x=${getElement('.numberQ7_1').value}&y=${getElement('.numberQ7_2').value}`)
				.then(res => {
					console.log(res);
					getElement('.sectionLeftQ7').innerHTML = `
				<p>
				<strong>حاصل  :</strong>
				<span>${res.data.result}</span>
			</p>
			`;
				})
		} else {
			getElement('.sectionLeftQ7').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	} else {
		getElement('.sectionLeftQ7').innerHTML = `
				<p>
				<strong style='color:red'>همه اعداد را وارد کنید</strong>
			</p>
			`;
	}
}


function question8() {
	if (getElement('.numberQ8_1').value !== '') {
		if (Math.sign(getElement('.numberQ8_1').value) > 0) {
			axios.get(`/answers/answers.php?q_8&x=${getElement('.numberQ8_1').value}`)
				.then(res => {
					console.log(res);
					getElement('.sectionLeftQ8').innerHTML = `
				<pre>
				${res.data.result}
				</pre>
			`;
				})
		} else {
			getElement('.sectionLeftQ8').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	}
}












document.body.addEventListener('input', e => {

	if (e.target.classList.contains('radius')) {
		if (Math.sign(e.target.value) > 0) {
			setError('.radius', 'success');
			removeError('.radius', 'error');
		} else {
			removeError('.radius', 'success');
			setError('.radius', 'error');
			getElement('.sectionLeft').innerHTML = '';
		}
		question1();

	}
	if (e.target.value != '' && e.target.classList.contains('number1') || e.target.classList.contains('number2')) {
		if (e.target.classList.contains('number1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.number1', 'success');
				removeError('.number1', 'error');
			} else {
				removeError('.number1', 'success');
				setError('.number1', 'error');
				getElement('.answer').innerHTML = '';
			}

		}
		if (e.target.classList.contains('number2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.number2', 'success');
				removeError('.number2', 'error');
			} else {
				removeError('.number2', 'success');
				setError('.number2', 'error');
				getElement('.answer').innerHTML = '';
			}

		}
		question2();
	}
	if (e.target.value != '' && e.target.classList.contains('numbers1') || e.target.classList.contains('numbers2')) {
		if (e.target.classList.contains('numbers1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numbers1', 'success');
				removeError('.numbers1', 'error');
			} else {
				removeError('.numbers1', 'success');
				setError('.numbers1', 'error');
				getElement('.answer').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numbers2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numbers2', 'success');
				removeError('.numbers2', 'error');
			} else {
				removeError('.numbers2', 'success');
				setError('.numbers2', 'error');
				getElement('.answer').innerHTML = '';
			}

		}
		question2_1();
	}


	if (e.target.value != '' && e.target.classList.contains('radius_1') || e.target.classList.contains('radius_2') || e.target.classList.contains('radius_3')) {
		if (e.target.classList.contains('radius_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.radius_1', 'success');
				removeError('.radius_1', 'error');
			} else {
				removeError('.radius_1', 'success');
				setError('.radius_1', 'error');
				getElement('.sectionLeftQ3').innerHTML = '';
			}

		}
		if (e.target.classList.contains('radius_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.radius_2', 'success');
				removeError('.radius_2', 'error');
			} else {
				removeError('.radius_2', 'success');
				setError('.radius_2', 'error');
				getElement('.sectionLeftQ3').innerHTML = '';
			}

		}
		if (e.target.classList.contains('radius_3')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.radius_3', 'success');
				removeError('.radius_3', 'error');
			} else {
				removeError('.radius_3', 'success');
				setError('.radius_3', 'error');
				getElement('.sectionLeftQ3').innerHTML = '';
			}

		}
		question3();
	}

	if (e.target.value != '' && e.target.classList.contains('numberQ4')) {
		if (e.target.classList.contains('numberQ4')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ4', 'success');
				removeError('.numberQ4', 'error');
			} else {
				removeError('.numberQ4', 'success');
				setError('.numberQ4', 'error');
				getElement('.sectionLeftQ4').innerHTML = '';
			}

		}
		question4();
	}



	if (e.target.value != '' && e.target.classList.contains('numberQ5_1') || e.target.classList.contains('numberQ5_2') || e.target.classList.contains('numberQ5_3')) {
		if (e.target.classList.contains('numberQ5_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ5_1', 'success');
				removeError('.numberQ5_1', 'error');
			} else {
				removeError('.numberQ5_1', 'success');
				setError('.numberQ5_1', 'error');
				getElement('.sectionLeftQ5').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numberQ5_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ5_2', 'success');
				removeError('.numberQ5_2', 'error');
			} else {
				removeError('.numberQ5_2', 'success');
				setError('.numberQ5_2', 'error');
				getElement('.sectionLeftQ5').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numberQ5_3')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ5_3', 'success');
				removeError('.numberQ5_3', 'error');
			} else {
				removeError('.numberQ5_3', 'success');
				setError('.numberQ5_3', 'error');
				getElement('.sectionLeftQ5').innerHTML = '';
			}

		}
		question5();
	}






	if (e.target.value != '' && e.target.classList.contains('numberQ6_1') || e.target.classList.contains('numberQ6_2')) {

		if (e.target.classList.contains('numberQ6_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ6_1', 'success');
				removeError('.numberQ6_1', 'error');
			} else {
				removeError('.numberQ6_1', 'success');
				setError('.numberQ6_1', 'error');
				getElement('.sectionLeftQ6').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numberQ6_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ6_2', 'success');
				removeError('.numberQ6_2', 'error');
			} else {
				removeError('.numberQ6_2', 'success');
				setError('.numberQ6_2', 'error');
				getElement('.sectionLeftQ6').innerHTML = '';
			}

		}
		question6();
	}


	if (e.target.value != '' && e.target.classList.contains('numberQ7_1') || e.target.classList.contains('numberQ7_2')) {

		if (e.target.classList.contains('numberQ7_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ7_1', 'success');
				removeError('.numberQ7_1', 'error');
			} else {
				removeError('.numberQ7_1', 'success');
				setError('.numberQ7_1', 'error');
				getElement('.sectionLeftQ7').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numberQ7_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ7_2', 'success');
				removeError('.numberQ7_2', 'error');
			} else {
				removeError('.numberQ7_2', 'success');
				setError('.numberQ7_2', 'error');
				getElement('.sectionLeftQ7').innerHTML = '';
			}

		}
		question7();
	}


	if (e.target.value != '' && e.target.classList.contains('numberQ8_1')) {

		if (e.target.classList.contains('numberQ8_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ8_1', 'success');
				removeError('.numberQ8_1', 'error');
			} else {
				removeError('.numberQ8_1', 'success');
				setError('.numberQ8_1', 'error');
				getElement('.sectionLeftQ8').innerHTML = '';
			}

		}

		question8();
	}










	// if(e.target.value != '' && e.target.classList.contains('n') || e.target.classList.contains('m')){
	// 	if(e.target.classList.contains('n')){
	// 		if(Math.sign(e.target.value) > 0){
	// 			setError('.n','success');
	// 			removeError('.n','error');
	// 		}else{
	// 			removeError('.n','success');
	// 			setError('.n','error');
	// 			getElement('.sectionLeft').innerHTML = '';
	// 		}

	// 	}
	// 	if(e.target.classList.contains('m')){
	// 		if(Math.sign(e.target.value) > 0){
	// 			setError('.m','success');
	// 			removeError('.m','error');
	// 		}else{
	// 			removeError('.m','success');
	// 			setError('.m','error');
	// 			getElement('.sectionLeft').innerHTML = '';
	// 		}
	// 	}
	// 	question2();
	// }



	// console.log('status:' + status, 'status2: ' +  status2);

})