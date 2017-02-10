// Project: Leaguelife
// Name: Jovan Belic 
// Date: 2.6.2017 - Time: 1:34 AM

	// MODAL

	
		const	openbutton = document.getElementById('menu');
				openbutton.addEventListener('click',open_menu);
	
		let modal = document.getElementById('links');
		let close = document.getElementById("close");


				function open_menu () {
						modal.style.transition = '1s';
						modal.style.top = '70px';

						openbutton.style.top = '-320px';
						openbutton.style.transition = '1s';

						close.style.top = '20px';
						close.style.transition = '2s';
			}

				close.addEventListener('click',close_menu);

				function close_menu () {
					modal.style.top = '-320px';

					close.style.top = '-320px';
					close.style.transition = '1s';

					openbutton.style.top = '20px';
					openbutton.style.transition = '2s';

				}

		this.vesti = document.getElementById('news').addEventListener('click',goNews);
		this.shortcut = document.getElementById('shortc').addEventListener('click',goNews);
		this.shortcut = document.getElementById('shortc1').addEventListener('click',goNews);
		this.shortcut = document.getElementById('shortc2').addEventListener('click',goNews);


			function goNews () {
				document.location = "vesti.html";
			}

