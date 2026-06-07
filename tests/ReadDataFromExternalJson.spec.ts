import {test,expect} from '@playwright/test';
import data1 from "../TestData/Testdata1.json";
import data from "../TestData/Testdata.json";
test('Read data from external JSON file',async({page})=>{
    
await page.goto("https://testing.qaautomationlabs.com/form.php"  , {timeout: 30000});

const heading=page.getByRole('heading');
expect(heading).toBeVisible({timeout: 10000});      
//expect(heading).toHaveText("Input");

const firstNameInput=page.getByLabel('First Name:');
await firstNameInput.fill(data1.fname);

const middleNameInput=page.getByLabel('Middle Name:');
await middleNameInput.fill(data1.middlename);

const lastNameInput=page.getByLabel('Last Name:');
await lastNameInput.fill(data1.Lastname);

const emailInput=page.getByLabel('Email:');
await emailInput.fill(data1.Email);

const passwordInput=page.getByLabel('Password:');
await passwordInput.fill(data1.password);

const addressInput=page.getByLabel('Address:');
await addressInput.fill(data1.Address);

const cityInput=page.getByLabel('City:');
await cityInput.fill(data1.City);

const stateInput=page.getByLabel('State:');
await stateInput.fill(data1.State);

const zipCodeInput=page.getByLabel('Pin Code:');
await zipCodeInput.fill(data1.PINCode);

const submitButton=page.getByRole('button', { name: 'Submit' });
await submitButton.click();


await page.getByText('Form submitted successfully').isVisible({timeout: 10000});






})

data.forEach((data3) => {
    test(`Test with data: ${data3.fname} ${data3.middlename} ${data3.Lastname}`, async ({ page }) => {
        await page.goto("https://testing.qaautomationlabs.com/form.php", { timeout: 30000 });
        const firstNameInput=page.getByLabel('First Name:');
await firstNameInput.fill(data3.fname);

const middleNameInput=page.getByLabel('Middle Name:');
await middleNameInput.fill(data3.middlename);

const lastNameInput=page.getByLabel('Last Name:');
await lastNameInput.fill(data3.Lastname);

const emailInput=page.getByLabel('Email:');
await emailInput.fill(data3.Email);

const passwordInput=page.getByLabel('Password:');
await passwordInput.fill(data3.password);

const addressInput=page.getByLabel('Address:');
await addressInput.fill(data3.Address);

const cityInput=page.getByLabel('City:');
await cityInput.fill(data3.City);

const stateInput=page.getByLabel('State:');
await stateInput.fill(data3.State);

const zipCodeInput=page.getByLabel('Pin Code:');
await zipCodeInput.fill(data3.PINCode);

const submitButton=page.getByRole('button', { name: 'Submit' });
await submitButton.click();


await page.getByText('Form submitted successfully').isVisible({timeout: 10000});



    });
});