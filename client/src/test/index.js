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
	var names = ["notreal", "notreal@email.com", "fakefake"];
	const USERNAME_SELECTOR = '#name'
	const EMAIL_SELECTOR = '#email'
	const EMAIL_SELECTOR2 = '#root > div > div > div.jss194 > div:nth-child(2) > div'
	const EMAIL_SELECTOR3 = '#root > div > div > div.jss194 > div:nth-child(2)'
	const PASSWORD_SELECTOR = '#password'
	const ACCOUNT_SELECTOR = '#accountType'
	const BUTTON_SELECTOR1 = '#root > div > header > div > a > button > span.jss67 > svg > path'
	const BUTTON_SELECTOR2 = '#root > div > header > div > span > a:nth-child(1) > button > span.jss84'
	const BUTTON_SELECTOR3 = '#root > div > header > div > span > a:nth-child(2) > button > span.jss84'
	const BUTTON_SELECTOR4 = '#root > div > div > div > div.jss222 > button > span.jss76'
	const BUTTON_SELECTOR5 = '#root > div > div > div.jss222 > button > span.jss76'
	const BUTTON_SELECTOR6 = 'body > div.jss231.jss224 > div.jss9.jss35.jss10.jss225.jss227 > div.jss238 > a > button'
	//await page.click(BUTTON_SELECTOR2);	

	//await page.waitForNavigation();

	//await page.type(USERNAME_SELECTOR, 'Testbob@email.com');
	//await page.focus(USERNAME_SELECTOR);
	//page.keyboard.type("Testbob@email.com");	
	
	//UNCOMMENT this block for testing the user creation, needs to create new users though so makes the database messy
	//await page.waitForSelector(USERNAME_SELECTOR);
  	//await page.type(USERNAME_SELECTOR, "Bob Tester");
	//await page.waitForSelector(EMAIL_SELECTOR);
	//await page.type(EMAIL_SELECTOR, "Testbob2@email.com");
	//await page.type(PASSWORD_SELECTOR, "123456");
	//await page.type(ACCOUNT_SELECTOR, 'Patient');

	//await page.click(BUTTON_SELECTOR4);

	//await page.waitForNavigation();
	//await page.click(BUTTONSELECTOR6);
	//await page.waitForNavigation();
	await page.click(BUTTON_SELECTOR3);
	//await page.waitForNavigation();
	
	//await page.waitForSelector(EMAIL_SELECTOR);
	//await page.type(EMAIL_SELECTOR, "T");
	//await page.waitForSelector(PASSWORD_SELECTOR);
	//await page.type(PASSWORD_SELECTOR, "1");
	var i;
	for (i = 0; i < names.length; i++) { 
		if(i == 2){
			await page.waitForSelector(EMAIL_SELECTOR);
			await page.type(EMAIL_SELECTOR, 'bob@email.com');
			await page.waitForSelector(PASSWORD_SELECTOR);
			await page.type(PASSWORD_SELECTOR, 'fakefake');
			await page.click(BUTTON_SELECTOR5);
			 await page.click(EMAIL_SELECTOR, {clickCount: 3})
                	await page.keyboard.press('Backspace')
                	await page.click(PASSWORD_SELECTOR, {clickCount: 3})
                	await page.keyboard.press('Backspace')
			}
		else{
  		await page.waitForSelector(EMAIL_SELECTOR);
		await page.type(EMAIL_SELECTOR, names[i]);
		await page.waitForSelector(PASSWORD_SELECTOR);
        	await page.type(PASSWORD_SELECTOR, names[i]);
		await page.click(BUTTON_SELECTOR5);
		await page.click(EMAIL_SELECTOR, {clickCount: 3})
    		await page.keyboard.press('Backspace')
		await page.click(PASSWORD_SELECTOR, {clickCount: 3})
    		await page.keyboard.press('Backspace')
	}}	
	await page.type(EMAIL_SELECTOR, 'testbob@email.com');
	await page.type(PASSWORD_SELECTOR, '123456');
	await page.click(BUTTON_SELECTOR5);
	await page.waitForNavigation();
        console.log('Test Executed Successfully');
        browser.close();
    }

run();
