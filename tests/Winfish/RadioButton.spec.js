import{test,expect} from '@playwright/test';

test("Click on RadioButton",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const button=page.locator("#male");
    await button.check();
    await expect(button).toBeChecked();
    const button2=page.locator("#female");
    await button.check();
    await expect(button2).not.toBeChecked();




})