import{test} from "@playwright/test";

test("Fill the practice form", async({page})=>{

//await page.goto("https://ultimateqa.com/filling-out-forms/");
//await page.locator("#et_pb_contact_name_0").fill("TestCode");
//await page.locator("#et_pb_contact_message_0").fill("Learn for brighter tomorrow");

//await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
//await page.frameLocator('iframe[name="iframeResult"]').getByText('This is a paragraph. It is').fill("Edited by me");

await page.goto("https://www.google.com/");
await page.getByLabel('Search', { exact: true }).pressSequentially("Playwright",{delay:1000});
//await page.getByLabel('Search', { exact: true }).press("ArrowDown+ArrowDown+ArrowDown");
await page.getByLabel('Search', { exact: true }).press("Enter");



})

