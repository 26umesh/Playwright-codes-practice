import { test, expect, Page } from '@playwright/test';
test('test', async ({ page }) =>{

    const Username=page.locator('#username');
    const sigin=page.locator('#signInBtn');
    const cardTitles =page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await Username.fill("rahulshetty");
    await page.locator('#password').fill("learning");
    await sigin.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await Username.fill(" ");
    await Username.fill("rahulshettyacademy");
    await sigin.click();
    //console.log(await cardTitles.nth(0).textContent());
    const alltitles=await cardTitles.allTextContents();
    console.log(alltitles);
    
});

