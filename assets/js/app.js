// const radiusInput = document.querySelector('.radius');
// const sectionLeft = document.querySelector('.sectionLeft');

particlesJS.load('particles-js', '/assets/js/particlesjs-config.json', function () {

});


var rectangleIsFilled = 0;
var triangleIsFilled = 1;
var isFilldiamond = 1;

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

function fillTriangle(ela) {
	if (ela.checked) {
		triangleIsFilled = 2;
		question10();
	} else {
		triangleIsFilled = 1;
		question10();
	}

}

function filldiamond(ela) {
	if (ela.checked) {
		isFilldiamond = 2;
		question13();
	} else {
		isFilldiamond = 1;
		question13();
	}

}


function createInput() {
	let input = createElement('input');
	input.setAttribute('class')
}

function question1() {
	if (getElement('.radius').value !== '') {
		if (Math.sign(getElement('.radius').value) > 0) {
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
		} else {
			getElement('.sectionLeftQ1').innerHTML = `
			
			<span style='color:red'>عدد منفی یا صفر وارد نکنید</span>
		
		`;
		}

	}
}

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

function question9() {
	if (getElement('.numberQ9_1').value !== '' && getElement('.numberQ9_2').value !== '') {
		if (Math.sign(getElement('.numberQ9_1').value) > 0) {

			axios.get(`/answers/answers.php?q_9&x=${getElement('.numberQ9_1').value}&y=${getElement('.numberQ9_2').value}&status=${rectangleIsFilled}`)
				.then(res => {
					
					getElement('.sectionLeftQ9').innerHTML = `
				<pre>
				${res.data.result}
				</pre>
			`;
				})
		} else {
			getElement('.sectionLeftQ9').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	} else {
		getElement('.sectionLeftQ9').innerHTML = `
				<p>
				<strong style='color:red'>همه اعداد را وارد کنید</strong>
			</p>
			`;
	}
}


function question10() {
	if (getElement('.numberQ10_1').value !== '') {
		if (Math.sign(getElement('.numberQ10_1').value) > 0) {

			axios.get(`/answers/answers.php?q_10&x=${getElement('.numberQ10_1').value}&status=${triangleIsFilled}`)
				.then(res => {
					
					getElement('.sectionLeftQ10').innerHTML = `
				<div style="width:100%;display:flex;">
					<div>
						<pre>
						${res.data.triangle1}
						</pre>
						<pre>
						${res.data.triangle2}
						</pre>
					</div>
					<div>
						<pre>
						${res.data.triangle3}
						</pre>
						<pre>
						${res.data.triangle4}
						</pre>
					</div>
				</div>
			`;
				})
		} else {
			getElement('.sectionLeftQ10').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	}
}



function question11() {
	if (getElement('.numberQ11_1').value !== '' ||
		getElement('.numberQ11_2').value !== '' ||
		getElement('.numberQ11_3').value !== ''

	) {


		axios.get(`/answers/answers.php?q_11&x=${getElement('.numberQ11_1').value}&y=${getElement('.numberQ11_2').value}&z=${getElement('.numberQ11_3').value}`)
			.then(res => {
				
				getElement('.sectionLeftQ11').innerHTML = `
				<p>
					<strong>کمترین  :</strong>
					<span>${res.data.result.minimum}</span>
				</p>
				<p>
					<strong>بیشترین  :</strong>
					<span>${res.data.result.maximum}</span>
				</p>
			`;
			})
	} else {
		getElement('.sectionLeftQ11').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
	}

}

function question12() {
	if (getElement('.numberQ12_1').value !== '' ||
		getElement('.numberQ12_2').value !== '' ||
		getElement('.numberQ12_3').value !== '' ||
		getElement('.numberQ12_4').value !== '' ||
		getElement('.numberQ12_5').value !== '' ||
		getElement('.numberQ12_6').value !== ''

	) {
		axios.get(`/answers/answers.php?q_12&a=${getElement('.numberQ12_1').value}&b=${getElement('.numberQ12_2').value}&c=${getElement('.numberQ12_3').value}&d=${getElement('.numberQ12_4').value}&e=${getElement('.numberQ12_5').value}&f=${getElement('.numberQ12_6').value}`)
			.then(res => {
				
				getElement('.sectionLeftQ12').innerHTML = `
				<p>
					<strong>کمرین ۱  :</strong>
					<span>${res.data.min1}</span>
				</p>
				<p>
					<strong>کمرین ۲  :</strong>
					<span>${res.data.min2}</span>
				</p>
				<p>
					<strong>کمرین ۳  :</strong>
					<span>${res.data.min3}</span>
				</p>
				<p>
					<strong>بیشترین ۱  :</strong>
					<span>${res.data.max1}</span>
				</p>
				<p>
					<strong>بیشترین ۲  :</strong>
					<span>${res.data.max2}</span>
				</p>
				<p>
					<strong>بیشترین ۳  :</strong>
					<span>${res.data.max3}</span>
				</p>
			`;
			})
	} else {
		getElement('.sectionLeftQ12').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
	}

}




function question13() {
	if (getElement('.numberQ13_1').value !== '') {
		if (Math.sign(getElement('.numberQ13_1').value) > 0) {
			axios.get(`/answers/answers.php?q_13&x=${getElement('.numberQ13_1').value}&status=${isFilldiamond}`)
				.then(res => {
					
					getElement('.sectionLeftQ13').innerHTML = `
				<pre>
				${res.data.result}
				</pre>
			`;
				})
		} else {
			getElement('.sectionLeftQ13').innerHTML = `
				<p>
				<strong style='color:red'>عدد منفی یا صفر وارد نکنید</strong>
			</p>
			`;
		}

	}
}




function question14() {
	if (getElement('.numberQ14_1').value !== '') {
		if (Math.sign(getElement('.numberQ14_1').value) > 0) {
			axios.get(`/answers/answers.php?q_14&x=${getElement('.numberQ14_1').value}`)
				.then(res => {
					
					getElement('.sectionLeftQ14').innerHTML = `
					<p>
					<strong>حاصل : </strong>
					<span>${res.data.result}</span>
				</p>
			`;
				})
		} else {
			getElement('.sectionLeftQ14').innerHTML = `
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

	if (e.target.value != '' && e.target.classList.contains('numberQ9_1') || e.target.classList.contains('numberQ9_2')) {

		if (e.target.classList.contains('numberQ9_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ9_1', 'success');
				removeError('.numberQ9_1', 'error');
			} else {
				removeError('.numberQ9_1', 'success');
				setError('.numberQ9_1', 'error');
				getElement('.sectionLeftQ9').innerHTML = '';
			}

		}
		if (e.target.classList.contains('numberQ9_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ9_2', 'success');
				removeError('.numberQ9_2', 'error');
			} else {
				removeError('.numberQ9_2', 'success');
				setError('.numberQ9_2', 'error');
				getElement('.sectionLeftQ9').innerHTML = '';
			}

		}

		question9();
	}

	if (e.target.value != '' && e.target.classList.contains('numberQ10_1')) {
		if (e.target.classList.contains('numberQ10_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ10_1', 'success');
				removeError('.numberQ10_1', 'error');
			} else {
				removeError('.numberQ10_1', 'success');
				setError('.numberQ10_1', 'error');
				getElement('.sectionLeftQ10').innerHTML = '';
			}
		}
		question10();
	}

	if (e.target.value != '' && e.target.classList.contains('numberQ11_1') ||
		e.target.classList.contains('numberQ11_2') ||
		e.target.classList.contains('numberQ11_3')

	) {
		if (e.target.classList.contains('numberQ11_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ11_1', 'success');
				removeError('.numberQ11_1', 'error');
			} else {
				removeError('.numberQ11_1', 'success');
				setError('.numberQ11_1', 'error');
				getElement('.sectionLeftQ11').innerHTML = '';
			}
		}
		if (e.target.classList.contains('numberQ11_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ11_2', 'success');
				removeError('.numberQ11_2', 'error');
			} else {
				removeError('.numberQ11_2', 'success');
				setError('.numberQ11_2', 'error');
				getElement('.sectionLeftQ11').innerHTML = '';
			}
		}
		if (e.target.classList.contains('numberQ11_3')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ11_3', 'success');
				removeError('.numberQ11_3', 'error');
			} else {
				removeError('.numberQ11_3', 'success');
				setError('.numberQ11_3', 'error');
				getElement('.sectionLeftQ11').innerHTML = '';
			}
		}

		question11();
	}




	if (e.target.value != '' &&
		e.target.classList.contains('numberQ12_1') ||
		e.target.classList.contains('numberQ12_2') ||
		e.target.classList.contains('numberQ12_3') ||
		e.target.classList.contains('numberQ12_4') ||
		e.target.classList.contains('numberQ12_5') ||
		e.target.classList.contains('numberQ12_6')


	) {
		if (e.target.classList.contains('numberQ12_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_1', 'success');
				removeError('.numberQ12_1', 'error');
			} else {
				removeError('.numberQ12_1', 'success');
				setError('.numberQ12_1', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}

		if (e.target.classList.contains('numberQ12_2')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_2', 'success');
				removeError('.numberQ12_2', 'error');
			} else {
				removeError('.numberQ12_2', 'success');
				setError('.numberQ12_2', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}

		if (e.target.classList.contains('numberQ12_3')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_3', 'success');
				removeError('.numberQ12_3', 'error');
			} else {
				removeError('.numberQ12_3', 'success');
				setError('.numberQ12_3', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}

		if (e.target.classList.contains('numberQ12_4')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_4', 'success');
				removeError('.numberQ12_4', 'error');
			} else {
				removeError('.numberQ12_4', 'success');
				setError('.numberQ12_4', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}

		if (e.target.classList.contains('numberQ12_5')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_5', 'success');
				removeError('.numberQ12_5', 'error');
			} else {
				removeError('.numberQ12_5', 'success');
				setError('.numberQ12_5', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}

		if (e.target.classList.contains('numberQ12_6')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ12_6', 'success');
				removeError('.numberQ12_6', 'error');
			} else {
				removeError('.numberQ12_6', 'success');
				setError('.numberQ12_6', 'error');
				getElement('.sectionLeftQ12').innerHTML = '';
			}
		}



		question12();
	}



	if (e.target.value != '' && e.target.classList.contains('numberQ13_1')) {
		if (e.target.classList.contains('numberQ13_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ13_1', 'success');
				removeError('.numberQ13_1', 'error');
			} else {
				removeError('.numberQ13_1', 'success');
				setError('.numberQ13_1', 'error');
				getElement('.sectionLeftQ13').innerHTML = '';
			}
		}
		question13();
	}




	if (e.target.value != '' && e.target.classList.contains('numberQ14_1')) {
		if (e.target.classList.contains('numberQ14_1')) {
			if (Math.sign(e.target.value) > 0) {
				setError('.numberQ14_1', 'success');
				removeError('.numberQ14_1', 'error');
			} else {
				removeError('.numberQ14_1', 'success');
				setError('.numberQ14_1', 'error');
				getElement('.sectionLeftQ14').innerHTML = '';
			}
		}
		question14();
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