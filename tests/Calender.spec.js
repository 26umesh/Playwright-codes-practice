import{test,expect} from '@playwright/test';
test('calnder',async({page})=>{

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
const monthnuber="5";
const date="5";
const year="2026";
const expectedlist=[monthnumber,date,year];

await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();
await page.getByText(year).click();
await page.locator(".react-calendar__year-view__months__month").nth(Number(monthnuber)-1).click();
await page.locator("//abbr[text()='"+date+"']").click();

const inputs=await page.locator(".react-date-picker__inputGroup input");

for(let i=1;i<inputs.length();i++)
{
   const value=inputs[i].getAttribute("value");
   expect(value).toEqual(expectedlist[i]);
}




});