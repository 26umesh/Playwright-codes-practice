import{test,expect} from '@playwright/test';
test('special UI',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button",{name:'submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name:"shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge' }).getByRole("button").click();

}

);