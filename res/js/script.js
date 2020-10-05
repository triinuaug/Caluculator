$(function() {
	
	let a = null;
	let b = null;
	let operator = null;
	
	function compose() {
		let value = "";
		if (a !== null) {
			value += a + " "
		}
		if (operator !== null) {
			value += operator + " "
		}
		if (b !== null) {
			value += b
		}

		let input = $('#eq');
		input.val(value);
	}

	$('#ce').click(function () {
		let input = $('#eq');
		let div = $('#result');
		div.text("");
		input.val("");
		a = null;
		b = null;
		operator = null;
	});
	
	
	$('#equals').click(function () {
		if (a === null) {
			alert('You have to select a number first');
			return;
		}
		if (operator === null) {
			alert('You have to select an operator');
			return;
		}
		if (b === null) {
			alert('You have to select a second number');
			return;
		}
		let result = 0;
		switch (operator) {
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '*':
				result = a * b;
				break;
			case '/':
				result = a / b;
				break;
			case '^':
				result = Math.pow(a, b);
				break;
			default:
				console.error("Unexpected operator")
				break;
		}
		
		let input = $('#eq');
		let value = " = " + result;
		input.val(input.val() + value);
	});

	

	let operatorButtons = $('.operator');
	
	for (let operatorButton of operatorButtons) {
		$(operatorButton).click(function () {
			if (a === null) {
				alert('You have to select a number first');
				return;
			}
			operator = $(this).attr('id');
			compose();
		})
		
	}

	for (let i = 0; i < 10; i++) {
		let number = $('#number-' + i);
		number.click(function () {
			if (operator === null && a === null) {
				a = i
			}
			else if (operator && b === null) {
				b = i
			}
			else if (operator === null && a !== null) {
				a = Number.parseInt(a + "" + i)
			} else {
				b = Number.parseInt(b + "" + i)
			}
			compose()
		})
	}
	
});
