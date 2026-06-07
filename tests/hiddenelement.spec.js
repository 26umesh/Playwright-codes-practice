import{test,expect} from '@playwright/test';

test('hideelement',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goBack();
    //await page.goForward();

    await expect( page.locator("#displayed-text")).toBeVisible();

    await page.locator("#hide-textbox").click();

    await expect(page.locator("#displayed-text")).toBeHidden();

    page.on('dialog',dialog=> dialog.accept());

    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();

    const framepage=page.frameLocator('#courses-iframe');
    await framepage.locator("li a[href='lifetime-access']:visible").click();
    const textcheck=await framepage.locator(".text h2").textContent();
    console.log(textcheck.split(" ")[1]);


});
