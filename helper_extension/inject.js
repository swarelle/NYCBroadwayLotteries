// this is the code which will be injected into a given page...
// Chrom extension code skeleton from https://gist.github.com/danharper/8364399

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Auto-completed!';
	document.body.appendChild(div);

	// check boxes
	for (let i = 1; i < 10; i++) {
		if (checkbox = document.getElementById("performance" + i)) {
			checkbox.checked = true;
		}
	}

	document.getElementById("firstname").value = "first";

	document.getElementById("lastname").value = "last";

	document.getElementById("email").value = "email@email.com";

	document.getElementById("zipcode").value = "00000";

	document.getElementById("age").checked = true;

	document.getElementById("two_tickets").checked = true;


})();