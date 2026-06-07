import{test,expect} from '@playwright/test';
test.only('UI Elements',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username');
    await page.locator('#password');
    const dropdown=await page.locator("select.form-control");
     await dropdown.selectOption("consult");
     await page.locator('.radiotextsty').last().click();
     await page.locator('#okayBtn').click();
    console.log( await page.locator('.radiotextsty').last().isChecked());
    await page.locator('#terms').click();
       console.log( await page.locator('#terms').isChecked());
       await page.locator('#terms').uncheck();
       expect(await page.locator('#terms').isChecked()).toBeFalsy();

       const documentlink=page.locator('.blinkingText');
       await expect(documentlink).toHaveAttribute("class","blinkingText");
     //await page.pause();


});

test('new child Element',async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

       const documentlink=page.locator('.blinkingText');
       await expect(documentlink).toHaveAttribute("class","blinkingText");

       const [newPage]=await Promise.all([

        page.context().waitForEvent('page'),
        documentlink.click(),

       ])
     var  text=await newPage.locator(".red").textContent();
     console.log(text);
     const arrayText=text.split("@");
     const domain=arrayText[1].split(" ") [0];
     console.log(domain);
     await page.locator('#username').fill(domain);
     //await page.pause();
     console.log(await page.locator('#username').textContent());



});