import {test,expect} from '@playwright/test';
test("checkbox",async ({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.locator(".Automation").check();
    await expect(page.locator(".Automation")).toBeChecked();
    await page.locator(".Performance").check();
    await expect(page.locator(".Performance")).toBeChecked();
    await page.locator(".Automation").uncheck();
    await expect(page.locator(".Automation")).not.toBeChecked();

    if( await page.locator(".Performance").isChecked()){
        console.log("Element is chcked");
    }

})
