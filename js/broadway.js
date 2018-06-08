const directEnter = [
		"https://lottery.broadwaydirect.com/show/aladdin/", // Aladdin
		"https://lottery.broadwaydirect.com/show/angels/", // Angels in America
		"https://lottery.broadwaydirect.com/show/sponge/", // SpongeBob SquarePants
		"https://lottery.broadwaydirect.com/show/wicked/" // Wicked
	];
const socialEnter = [
		"http://anastasiabroadwaylottery.com/", // Anastasia
		"http://www.thebandsvisitlottery.com/", // The Band's Visit
		"http://www.abronxtalethemusical.com/lottery/", // A Bronx Tale
		"http://www.dearevanhansenlottery.com/", // Dear Evan Hansen
		"http://myfairladylottery.com/", // My Fair Lady
		"http://www.phantombroadwaylottery.com/", // The Phantom of the Opera
		"http://schoolofrocklottery.com/" // School of Rock
	];
const bulkEnter = [
		"http://www.luckyseat.com/book-of-mormon/", // The Book of Mormon
		"https://www.luckyseat.com/hamilton-ny/", // Hamilton
		"http://lottery.kinkybootsthemusical.com/", // Kinky Boots
		"https://www.luckyseat.com/mean-girls/", // Mean Girls
		"http://www.luckyseat.com/springsteen-broadway/" // Springsteen on Broadway
	];

/*
 * Opens each url in urls in a new window and return all the opened window objects.
 *
 * @param urls An array of URLs as strings.
 */
function openPages(urls) {
	let opened = [];
	for (const url of urls) {
		// Open the URL in a new tab/window and push the opened window object into the array
		opened.push(window.open(url, "_blank"));
	}
  return opened;
}

/*
 * Runs the program
 */
function run() {
  openPages(bulkEnter);
  openPages(directEnter);
  openPages(socialEnter);
}

run();
