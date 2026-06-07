import{test,expect} from '@playwright/test'

test("select option",async ({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.locator("#testingDropdown").selectOption("Performance Testing");
    await page.locator("#testingDropdown").selectOption({index:3});

} )