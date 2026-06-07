import{test,expect} from '@playwright/test';

test('practice assigment1',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Ram");
    await page.locator("#lastName").fill("Kumar");
    await page.locator('#userEmail').fill("ram.37@gmail.com");
    await page.locator('#userMobile').fill("9993974515");
    await page.locator('#userPassword').fill("Tester@001");
    await page.locator('#confirmPassword').fill("Tester@001");
    await page.locator("input[type='checkbox']").click();
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    console.log(await page.locator(".headcolor").textContent());
    await page.locator('.btn.btn-primary').click();
    console.log(await page.locator('.login-title').textContent());
    await expect(page.locator(".login-title")).toContainText("Log in");




});
test.only('login',async({page})=>{
      await page.goto("https://rahulshettyacademy.com/client/");
      await page.waitForLoadState('networkidle');
await page.locator('#userEmail').fill("ram.l7@gmail.com");
await page.locator('#userPassword').fill("Tester@001");
await page.locator('#login').click();
console.log(await page.locator(".card-body b").nth(0).textContent());
console.log(await page.locator(".card-body b").allTextContents());




});