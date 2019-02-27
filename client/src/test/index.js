const puppeteer = require('puppeteer');
const http = require('http');
async function run() {
	  
        const browser = await puppeteer.launch({ headless: false, slowMo: 100});	
	const page = await browser.newPage();
	
	try {
            await page.goto('https://medicalsocialnetwork.herokuapp.com');
        } catch (err) {
            console.log(err);
        }
        
	//const USERNAME_SELECTOR = '#root > div > div.container > div > div > form > div:nth-child(1) > label'
	var names = ["notreal", "notreal@email.com", "fakepassword"];
	const USERNAME_SELECTOR = '#email'
	const PASSWORD_SELECTOR = '#password'
	const BUTTON_SELECTOR1 = '#root > div > div.container.valign-wrapper > div > div > a.btn.btn-large.waves-effect.white.hoverable.black-text'
	const BUTTON_SELECTOR2 = '#root > div > div.container > div > div > form > div:nth-child(3) > button'
	const BUTTON_SELECTOR3 = '#root > div > div.container.valign-wrapper > div > div > button'
	await page.click(BUTTON_SELECTOR1);	

	//await page.waitForNavigation();

	//await page.type(USERNAME_SELECTOR, 'bob@email.com');
	//await page.focus(USERNAME_SELECTOR);
	//page.keyboard.type("bob@email.com");	
	
	await page.waitForSelector(USERNAME_SELECTOR);
  	await page.type(USERNAME_SELECTOR, "bob@email.com");
	await page.type(PASSWORD_SELECTOR, '123456');

	await page.click(BUTTON_SELECTOR2);

	await page.waitForNavigation();
	await page.click(BUTTON_SELECTOR3);
	
	var i;
	for (i = 0; i < names.length; i++) { 
		if(i == 2){
			await page.type(USERNAME_SELECTOR, 'bob@email.com');
			await page.type(PASSWORD_SELECTOR, 'fakefake');
			await page.click(BUTTON_SELECTOR2);
		}
		else{
  		await page.type(USERNAME_SELECTOR, names[i]);
        	await page.type(PASSWORD_SELECTOR, names[i]);
		await page.click(BUTTON_SELECTOR2);
		await page.click(USERNAME_SELECTOR, {clickCount: 3})
    		await page.keyboard.press('Backspace')
		await page.click(PASSWORD_SELECTOR, {clickCount: 3})
    		await page.keyboard.press('Backspace')
	}}	
	
        console.log('Test Executed Successfully');
        browser.close();
    }

run();
