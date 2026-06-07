import{test,expect} from '@playwright/test'

test("select option",async ({page})=>{

    await page.goto("https://demoqa.com/droppable");
    await page.locator('#draggable').dragTo(page.getByText('Drop Here', { exact: true }));

} )