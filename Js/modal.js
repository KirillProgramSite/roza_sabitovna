let btnPay = document.querySelectorAll('.btn-pay'),
	 modal = document.querySelector('.modal'),
	 closeModal = document.querySelector('.close__modal'),
	 body = document.body;

	 btnPay.forEach(function(el) {
	 	let btnPay = el;
	 	btnPay.addEventListener('click', function (e) {
	 		let target = e.target;
	 		body.style.overflow = 'hidden';
			modal.classList.add('modal__open');
		})
	})

	 closeModal.addEventListener('click', function() {
	 	modal.classList.remove('modal__open');
	 	body.style.overflow = 'scroll';
	 })